import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const ModalPage = lazy(() => import("~/components/pages/Components/Modal"));

export const modalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.MODAL,
  component: ModalPage,
  pendingComponent: PageLoadingSpinner,
});
