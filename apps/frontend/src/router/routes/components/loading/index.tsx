import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const LoadingPage = lazy(() => import("~/components/pages/Components/Loading"));

export const loadingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.LOADING,
  component: LoadingPage,
  pendingComponent: PageLoadingSpinner,
});
