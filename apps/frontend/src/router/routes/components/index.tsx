import { PageLoadingSpinner } from "@packages/ui";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pages } from "~/constants/pages";
import { rootRoute } from "~/router/rootRoute";

const ComponentsLayout = lazy(() => import("~/components/pages/Components/Layout"));
const ComponentsIndex = lazy(() => import("~/components/pages/Components/Index"));
const ButtonPage = lazy(() => import("~/components/pages/Components/Button"));
const DropdownPage = lazy(() => import("~/components/pages/Components/Dropdown"));
const ModalPage = lazy(() => import("~/components/pages/Components/Modal"));
const InputPage = lazy(() => import("~/components/pages/Components/Input"));
const TextareaPage = lazy(() => import("~/components/pages/Components/Textarea"));
const SelectPage = lazy(() => import("~/components/pages/Components/Select"));
const CheckboxPage = lazy(() => import("~/components/pages/Components/Checkbox"));
const TogglePage = lazy(() => import("~/components/pages/Components/Toggle"));
const RadioPage = lazy(() => import("~/components/pages/Components/Radio"));
const RangePage = lazy(() => import("~/components/pages/Components/Range"));
const FileInputPage = lazy(() => import("~/components/pages/Components/FileInput"));
const FormFieldPage = lazy(() => import("~/components/pages/Components/FormField"));
const BadgePage = lazy(() => import("~/components/pages/Components/Badge"));
const CardPage = lazy(() => import("~/components/pages/Components/Card"));
const AvatarPage = lazy(() => import("~/components/pages/Components/Avatar"));
const StatPage = lazy(() => import("~/components/pages/Components/Stat"));
const TablePage = lazy(() => import("~/components/pages/Components/Table"));
const KbdPage = lazy(() => import("~/components/pages/Components/Kbd"));
const AlertPage = lazy(() => import("~/components/pages/Components/Alert"));
const LoadingPage = lazy(() => import("~/components/pages/Components/Loading"));
const ProgressPage = lazy(() => import("~/components/pages/Components/Progress"));
const SkeletonPage = lazy(() => import("~/components/pages/Components/Skeleton"));
const TooltipPage = lazy(() => import("~/components/pages/Components/Tooltip"));
const TabsPage = lazy(() => import("~/components/pages/Components/Tabs"));
const NavbarPage = lazy(() => import("~/components/pages/Components/Navbar"));
const BreadcrumbsPage = lazy(() => import("~/components/pages/Components/Breadcrumbs"));
const MenuPage = lazy(() => import("~/components/pages/Components/Menu"));
const StepsPage = lazy(() => import("~/components/pages/Components/Steps"));
const DividerPage = lazy(() => import("~/components/pages/Components/Divider"));
const JoinPage = lazy(() => import("~/components/pages/Components/Join"));
const CollapsePage = lazy(() => import("~/components/pages/Components/Collapse"));

const pending = { pendingComponent: PageLoadingSpinner };

export const componentsLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: pages.COMPONENTS,
  component: ComponentsLayout,
  ...pending,
});

export const componentsIndexRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "/",
  component: ComponentsIndex,
  ...pending,
});

export const buttonRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "button",
  component: ButtonPage,
  ...pending,
});
export const dropdownRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "dropdown",
  component: DropdownPage,
  ...pending,
});
export const modalRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "modal",
  component: ModalPage,
  ...pending,
});
export const inputRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "input",
  component: InputPage,
  ...pending,
});
export const textareaRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "textarea",
  component: TextareaPage,
  ...pending,
});
export const selectRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "select",
  component: SelectPage,
  ...pending,
});
export const checkboxRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "checkbox",
  component: CheckboxPage,
  ...pending,
});
export const toggleRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "toggle",
  component: TogglePage,
  ...pending,
});
export const radioRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "radio",
  component: RadioPage,
  ...pending,
});
export const rangeRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "range",
  component: RangePage,
  ...pending,
});
export const fileInputRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "file-input",
  component: FileInputPage,
  ...pending,
});
export const formFieldRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "form-field",
  component: FormFieldPage,
  ...pending,
});
export const badgeRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "badge",
  component: BadgePage,
  ...pending,
});
export const cardRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "card",
  component: CardPage,
  ...pending,
});
export const avatarRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "avatar",
  component: AvatarPage,
  ...pending,
});
export const statRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "stat",
  component: StatPage,
  ...pending,
});
export const tableRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "table",
  component: TablePage,
  ...pending,
});
export const kbdRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "kbd",
  component: KbdPage,
  ...pending,
});
export const alertRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "alert",
  component: AlertPage,
  ...pending,
});
export const loadingRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "loading",
  component: LoadingPage,
  ...pending,
});
export const progressRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "progress",
  component: ProgressPage,
  ...pending,
});
export const skeletonRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "skeleton",
  component: SkeletonPage,
  ...pending,
});
export const tooltipRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "tooltip",
  component: TooltipPage,
  ...pending,
});
export const tabsRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "tabs",
  component: TabsPage,
  ...pending,
});
export const navbarRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "navbar",
  component: NavbarPage,
  ...pending,
});
export const breadcrumbsRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "breadcrumbs",
  component: BreadcrumbsPage,
  ...pending,
});
export const menuRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "menu",
  component: MenuPage,
  ...pending,
});
export const stepsRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "steps",
  component: StepsPage,
  ...pending,
});
export const dividerRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "divider",
  component: DividerPage,
  ...pending,
});
export const joinRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "join",
  component: JoinPage,
  ...pending,
});
export const collapseRoute = createRoute({
  getParentRoute: () => componentsLayoutRoute,
  path: "collapse",
  component: CollapsePage,
  ...pending,
});

export const allComponentRoutes = [
  componentsIndexRoute,
  buttonRoute,
  dropdownRoute,
  modalRoute,
  inputRoute,
  textareaRoute,
  selectRoute,
  checkboxRoute,
  toggleRoute,
  radioRoute,
  rangeRoute,
  fileInputRoute,
  formFieldRoute,
  badgeRoute,
  cardRoute,
  avatarRoute,
  statRoute,
  tableRoute,
  kbdRoute,
  alertRoute,
  loadingRoute,
  progressRoute,
  skeletonRoute,
  tooltipRoute,
  tabsRoute,
  navbarRoute,
  breadcrumbsRoute,
  menuRoute,
  stepsRoute,
  dividerRoute,
  joinRoute,
  collapseRoute,
];
