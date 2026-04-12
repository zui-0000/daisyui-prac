import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const TooltipPage = lazy(() => import("~/components/pages/Components/Tooltip"));

export const tooltipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.TOOLTIP,
  component: TooltipPage,
  pendingComponent: PageLoadingSpinner,
});
