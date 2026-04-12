import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";
import { alertRoute } from "./alert";
import { avatarRoute } from "./avatar";
import { badgeRoute } from "./badge";
import { breadcrumbsRoute } from "./breadcrumbs";
import { buttonRoute } from "./button";
import { cardRoute } from "./card";
import { checkboxRoute } from "./checkbox";
import { collapseRoute } from "./collapse";
import { dividerRoute } from "./divider";
import { dropdownRoute } from "./dropdown";
import { fileInputRoute } from "./file-input";
import { formFieldRoute } from "./form-field";
import { inputRoute } from "./input";
import { joinRoute } from "./join";
import { kbdRoute } from "./kbd";
import { loadingRoute } from "./loading";
import { menuRoute } from "./menu";
import { modalRoute } from "./modal";
import { navbarRoute } from "./navbar";
import { progressRoute } from "./progress";
import { radioRoute } from "./radio";
import { rangeRoute } from "./range";
import { selectRoute } from "./select";
import { skeletonRoute } from "./skeleton";
import { statRoute } from "./stat";
import { stepsRoute } from "./steps";
import { tableRoute } from "./table";
import { tabsRoute } from "./tabs";
import { textareaRoute } from "./textarea";
import { toggleRoute } from "./toggle";
import { tooltipRoute } from "./tooltip";

const ComponentsIndex = lazy(() => import("~/components/pages/Components/Index"));

export const componentsIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS.INDEX,
  component: ComponentsIndex,
  pendingComponent: PageLoadingSpinner,
});

export const componentRoutes = [
  componentsIndexRoute,
  alertRoute,
  avatarRoute,
  badgeRoute,
  breadcrumbsRoute,
  buttonRoute,
  cardRoute,
  checkboxRoute,
  collapseRoute,
  dividerRoute,
  dropdownRoute,
  fileInputRoute,
  formFieldRoute,
  inputRoute,
  joinRoute,
  kbdRoute,
  loadingRoute,
  menuRoute,
  modalRoute,
  navbarRoute,
  progressRoute,
  radioRoute,
  rangeRoute,
  selectRoute,
  skeletonRoute,
  statRoute,
  stepsRoute,
  tableRoute,
  tabsRoute,
  textareaRoute,
  toggleRoute,
  tooltipRoute,
] as const;
