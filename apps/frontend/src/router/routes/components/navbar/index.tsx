import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const NavbarPage = lazy(() => import("~/components/pages/Components/Navbar"));

export const navbarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.NAVBAR,
  component: NavbarPage,
  pendingComponent: PageLoadingSpinner,
});
