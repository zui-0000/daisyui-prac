import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const StatPage = lazy(() => import("~/components/pages/Components/Stat"));

export const statRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.STAT,
  component: StatPage,
  pendingComponent: PageLoadingSpinner,
});
