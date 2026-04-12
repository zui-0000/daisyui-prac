import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const SkeletonPage = lazy(() => import("~/components/pages/Components/Skeleton"));

export const skeletonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.SKELETON,
  component: SkeletonPage,
  pendingComponent: PageLoadingSpinner,
});
