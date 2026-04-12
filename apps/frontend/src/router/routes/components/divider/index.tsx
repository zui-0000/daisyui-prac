import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const DividerPage = lazy(() => import("~/components/pages/Components/Divider"));

export const dividerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.DIVIDER,
  component: DividerPage,
  pendingComponent: PageLoadingSpinner,
});
