import type { AnyRouter } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { topRoute } from "./routes";

const routeTree = rootRoute.addChildren([topRoute]);

export const router = createRouter({
  routeTree,
  // RouterProvider の `context` プロップで実際のルーターインスタンスが注入されるため、
  // ここでのデフォルト値は型チェック用のプレースホルダーに過ぎない。
  // `AnyRouter` はクラスインスタンス型であり準拠したオブジェクトを生成できないため、
  // 型キャストを許容している。
  // tanstack-router のドキュメントや公式サンプルも undefined! パターンを使っており、これがコミュニティのイディオムとして定着している。
  // 「RouterProvider が必ずcontext を上書きするので実行時には問題ない、型チェックのためだけのダミー」という意図を表すには undefined! が一番意図が伝わる。

  // biome-ignore lint/style/noNonNullAssertion: RouterProvider の context プロップで上書きされるため、型チェック用のプレースホルダーとして許容
  context: { router: undefined! as AnyRouter },
});
