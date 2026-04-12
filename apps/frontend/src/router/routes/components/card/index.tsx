import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const CardPage = lazy(() => import("~/components/pages/Components/Card"));

export const cardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.CARD,
  component: CardPage,
  pendingComponent: PageLoadingSpinner,
});
