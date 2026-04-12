import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const TabsPage = lazy(() => import("~/components/pages/Components/Tabs"));

export const tabsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.TABS,
  component: TabsPage,
  pendingComponent: PageLoadingSpinner,
});
