import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const JoinPage = lazy(() => import("~/components/pages/Components/Join"));

export const joinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.JOIN,
  component: JoinPage,
  pendingComponent: PageLoadingSpinner,
});
