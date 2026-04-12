import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const TopPage = lazy(() => import("~/components/pages/Top"));

export const topRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.TOP,
  component: TopPage,
  pendingComponent: PageLoadingSpinner,
});
