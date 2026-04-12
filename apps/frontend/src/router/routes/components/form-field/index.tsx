import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const FormFieldPage = lazy(() => import("~/components/pages/Components/FormField"));

export const formFieldRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.FORM_FIELD,
  component: FormFieldPage,
  pendingComponent: PageLoadingSpinner,
});
