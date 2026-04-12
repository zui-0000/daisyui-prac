import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const BadgePage = lazy(() => import("~/components/pages/Components/Badge"));

export const badgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.BADGE,
  component: BadgePage,
  pendingComponent: PageLoadingSpinner,
});
