import type { router } from "../createRouter";

/**
 * tanstack-router のモジュール拡張。
 * Register インターフェースに router の型を登録することで、
 * useNavigate や Link の `to` プロップが既知のルートパスのみを受け付けるようになる。
 * このファイルは tsconfig の include 設定により自動的に読み込まれるため、明示的な import は不要。
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
