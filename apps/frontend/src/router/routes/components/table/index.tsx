import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const TablePage = lazy(() => import("~/components/pages/Components/Table"));

export const tableRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.TABLE,
  component: TablePage,
  pendingComponent: PageLoadingSpinner,
});
