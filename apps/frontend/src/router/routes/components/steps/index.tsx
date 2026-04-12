import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const StepsPage = lazy(() => import("~/components/pages/Components/Steps"));

export const stepsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.STEPS,
  component: StepsPage,
  pendingComponent: PageLoadingSpinner,
});
