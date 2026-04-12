import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const RadioPage = lazy(() => import("~/components/pages/Components/Radio"));

export const radioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.RADIO,
  component: RadioPage,
  pendingComponent: PageLoadingSpinner,
});
