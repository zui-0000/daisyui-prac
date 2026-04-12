import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const BreadcrumbsPage = lazy(() => import("~/components/pages/Components/Breadcrumbs"));

export const breadcrumbsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.BREADCRUMBS,
  component: BreadcrumbsPage,
  pendingComponent: PageLoadingSpinner,
});
