import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const CheckboxPage = lazy(() => import("~/components/pages/Components/Checkbox"));

export const checkboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.CHECKBOX,
  component: CheckboxPage,
  pendingComponent: PageLoadingSpinner,
});
