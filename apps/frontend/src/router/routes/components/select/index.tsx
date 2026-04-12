import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const SelectPage = lazy(() => import("~/components/pages/Components/Select"));

export const selectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.SELECT,
  component: SelectPage,
  pendingComponent: PageLoadingSpinner,
});
