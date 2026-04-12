import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const InputPage = lazy(() => import("~/components/pages/Components/Input"));

export const inputRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.INPUT,
  component: InputPage,
  pendingComponent: PageLoadingSpinner,
});
