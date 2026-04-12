import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const ProgressPage = lazy(() => import("~/components/pages/Components/Progress"));

export const progressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.PROGRESS,
  component: ProgressPage,
  pendingComponent: PageLoadingSpinner,
});
