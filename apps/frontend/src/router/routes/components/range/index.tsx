import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const RangePage = lazy(() => import("~/components/pages/Components/Range"));

export const rangeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.RANGE,
  component: RangePage,
  pendingComponent: PageLoadingSpinner,
});
