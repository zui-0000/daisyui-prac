import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const KbdPage = lazy(() => import("~/components/pages/Components/Kbd"));

export const kbdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.KBD,
  component: KbdPage,
  pendingComponent: PageLoadingSpinner,
});
