import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const MenuPage = lazy(() => import("~/components/pages/Components/Menu"));

export const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.MENU,
  component: MenuPage,
  pendingComponent: PageLoadingSpinner,
});
