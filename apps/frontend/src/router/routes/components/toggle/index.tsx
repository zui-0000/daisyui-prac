import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const TogglePage = lazy(() => import("~/components/pages/Components/Toggle"));

export const toggleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.TOGGLE,
  component: TogglePage,
  pendingComponent: PageLoadingSpinner,
});
