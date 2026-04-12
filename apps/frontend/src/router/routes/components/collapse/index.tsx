import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const CollapsePage = lazy(() => import("~/components/pages/Components/Collapse"));

export const collapseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.COLLAPSE,
  component: CollapsePage,
  pendingComponent: PageLoadingSpinner,
});
