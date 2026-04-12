import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const FileInputPage = lazy(() => import("~/components/pages/Components/FileInput"));

export const fileInputRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.FILE_INPUT,
  component: FileInputPage,
  pendingComponent: PageLoadingSpinner,
});
