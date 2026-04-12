import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const AvatarPage = lazy(() => import("~/components/pages/Components/Avatar"));

export const avatarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.AVATAR,
  component: AvatarPage,
  pendingComponent: PageLoadingSpinner,
});
