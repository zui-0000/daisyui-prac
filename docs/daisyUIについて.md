# DaisyUI について

## BaseUI との比較

BaseUI はスタイルなしのヘッドレスコンポーネントライブラリ。アクセシビリティや動作ロジックは提供してくれるが、スタイルは全て自前で書く必要がある。

DaisyUI は Tailwind のユーティリティクラスとして提供されており、コンポーネント側は props を受け取ってクラスを組み立てるだけで済む。Select を例にすると:

| | BaseUI | DaisyUI |
|---|---|---|
| スタイル | 自前 | クラスを付けるだけ |
| コンポーネント構成 | Root / Trigger / Positioner / Popup など多層 | ネイティブ要素にクラスを付与 |
| カスタマイズ性 | 高い（option にアイコンなど自由） | ネイティブ要素の制約を受ける |
| 実装コスト | 高い | 低い |

管理画面やコンポーネントショーケースのようなユースケースでは DaisyUI の割り切りが大きな強み。高度なカスタム UI が必要な場合は BaseUI が向いている。

---

## テーマとカラーの仕組み

### `data-theme` 属性

DaisyUI v5 のカラークラス（`btn-primary`、`text-secondary` など）は CSS 変数（`--color-primary` など）で実装されている。この CSS 変数はテーマによって定義されるため、**`<html>` タグに `data-theme` 属性がないと色が適用されない**。

```html
<!-- これがないと btn-primary などの色が出ない -->
<html lang="ja" data-theme="light">
```

DaisyUI v5 はデフォルトで `light` / `dark` などのテーマを同梱している。

### カスタムカラーの定義

プロジェクト固有のカラーは `packages/ui/src/styles/colors.ts` に定義する。ここに追加した値は `tailwind.config.ts` 経由で Tailwind のテーマに組み込まれ、`bg-APP_PRIMARY_COLOR` などのクラスとして使える。

```ts
// packages/ui/src/styles/colors.ts
const APP_PRIMARY_COLOR = "#f97316";
const APP_SECONDARY_COLOR = "#eab308";

export const colors = {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  PRIMARY_BUTTON: APP_PRIMARY_COLOR, // 変数を参照することで一元管理できる
} as const;
```

**DaisyUI のセマンティックカラー（`primary`、`secondary` など）は `colors.ts` に定義しない。** これらは DaisyUI のテーマ機能でまとめて管理するもの。`colors.ts` にはテーマに乗らないプロジェクト固有の固定カラーを定義する。

---

## Tailwind v4 + DaisyUI v5 での注意点

### 動的クラス名は Tailwind に検出されない

Tailwind v4 はビルド時にソースコードを**静的解析**してクラス名を収集する。テンプレートリテラルで動的に生成したクラス名は検出されないため、CSS に出力されない。

```tsx
// NG: Tailwind が "btn-primary" を検出できない
color && `btn-${color}`

// OK: "btn-primary" という文字列が静的に存在する
const colorClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  // ...
};
color && colorClass[color]
```

この問題はコンポーネントライブラリで特に発生しやすい。`packages/ui` の全 primitive コンポーネントでは静的マップを使用してこれを回避している。

### `@ui/*` パスエイリアスの設定

`packages/ui` のソースファイルは `@ui/lib/utils` などの内部エイリアスを使用している。`apps/frontend` の `tsconfig.app.json` から `packages/ui` のソースを参照する構成では、このエイリアスを frontend 側にも追加する必要がある。

```json
// apps/frontend/tsconfig.app.json
"paths": {
  "@packages/ui/*": ["../../packages/ui/src/*"],
  "@ui/*": ["../../packages/ui/src/*"],  // これがないと型エラーになる
  "~/*": ["./src/*"]
}
```
