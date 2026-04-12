import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const ButtonPage = lazy(() => import("~/components/pages/Components/Button"));

export const buttonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.BUTTON,
  component: ButtonPage,
  pendingComponent: PageLoadingSpinner,
});
