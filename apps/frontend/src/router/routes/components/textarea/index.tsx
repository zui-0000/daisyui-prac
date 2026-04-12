import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const TextareaPage = lazy(() => import("~/components/pages/Components/Textarea"));

export const textareaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.TEXTAREA,
  component: TextareaPage,
  pendingComponent: PageLoadingSpinner,
});
