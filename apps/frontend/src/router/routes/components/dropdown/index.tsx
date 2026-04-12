import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const DropdownPage = lazy(() => import("~/components/pages/Components/Dropdown"));

export const dropdownRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.DROPDOWN,
  component: DropdownPage,
  pendingComponent: PageLoadingSpinner,
});
