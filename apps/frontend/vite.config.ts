import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  define: {
    // Import.meta.env.VITE_APP_ENV の代わりに __APP_ENV__ を使用する
    // (orvalのgenerate時にワーニングが出るため使用しないことにした)
    __APP_ENV__: JSON.stringify(mode),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // frontend側のエイリアス
      "~": resolve(__dirname, "./src"),
      // uiパッケージのエイリアス
      "@packages/ui": resolve(__dirname, "../../packages/ui/src"),

      // -----------------------------------------------------------
      // 使用しないエイリアス
      // -----------------------------------------------------------
      // uiパッケージの中で使用しているエイリアス。これがないと解決できない（ただし、frontendからは使わないこと）
      "@ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
}));
