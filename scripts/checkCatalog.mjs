import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const checkPackageJson = (packageJsonPath, label) => {
  if (!existsSync(packageJsonPath)) return false;

  const pkg = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  const violations = Object.entries(deps).filter(
    ([, version]) => !version.startsWith("catalog:") && !version.startsWith("workspace:"),
  );

  if (violations.length > 0) {
    console.error(`[${label}] catalog未登録のパッケージが存在します:`);
    for (const [name, version] of violations) {
      console.error(`  ${name}: ${version}`);
    }
    return true;
  }

  console.log(`[${label}] 全パッケージがcatalog参照です`);
  return false;
};

let hasViolations = checkPackageJson(join(root, "package.json"), "root");

const targetDirs = ["apps", "packages"];

for (const targetDir of targetDirs) {
  const dir = join(root, targetDir);
  if (!existsSync(dir)) continue;

  const packageNames = readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const packageName of packageNames) {
    const packageJsonPath = join(dir, packageName, "package.json");
    if (!existsSync(packageJsonPath)) continue;

    if (checkPackageJson(packageJsonPath, `${targetDir}/${packageName}`)) {
      hasViolations = true;
    }
  }
}

if (hasViolations) {
  process.exit(1);
}
