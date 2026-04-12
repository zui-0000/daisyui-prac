import { PageLoadingSpinner } from "@packages/ui";
import type { AnyRouter } from "@tanstack/react-router";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Suspense } from "react";

type RouterContext = {
  router: AnyRouter;
};

/**
 * TanStack Router の component に渡すコンポーネントは、Router 独自の型チェックが行われる
 * FC を明示的に付けると、TanStack Router が期待する型と不一致になりエラーになってしまう。
 */
const RootLayout = () => {
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      <Outlet />
    </Suspense>
  );
};

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});
