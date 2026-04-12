import type { AnyRouter } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { componentRoutes, topRoute } from "./routes";

const routeTree = rootRoute.addChildren([topRoute, ...componentRoutes]);

export const router = createRouter({
  routeTree,
  // RouterProvider の `context` プロップで実際のルーターインスタンスが注入されるため、
  // ここでのデフォルト値は型チェック用のプレースホルダーに過ぎない。
  // biome-ignore lint/style/noNonNullAssertion: RouterProvider の context プロップで上書きされるため、型チェック用のプレースホルダーとして許容
  context: { router: undefined! as AnyRouter },
});
