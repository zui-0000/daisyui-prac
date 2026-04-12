import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const AlertPage = lazy(() => import("~/components/pages/Components/Alert"));

export const alertRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.ALERT,
  component: AlertPage,
  pendingComponent: PageLoadingSpinner,
});
