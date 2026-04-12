import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { pages } from "~/constants/pages";

const sidebarItems = [
  {
    category: "アクション",
    items: [
      { label: "Button", path: pages.COMPONENTS_BUTTON },
      { label: "Dropdown", path: pages.COMPONENTS_DROPDOWN },
      { label: "Modal", path: pages.COMPONENTS_MODAL },
    ],
  },
  {
    category: "データ入力",
    items: [
      { label: "Input", path: pages.COMPONENTS_INPUT },
      { label: "Textarea", path: pages.COMPONENTS_TEXTAREA },
      { label: "Select", path: pages.COMPONENTS_SELECT },
      { label: "Checkbox", path: pages.COMPONENTS_CHECKBOX },
      { label: "Toggle", path: pages.COMPONENTS_TOGGLE },
      { label: "Radio", path: pages.COMPONENTS_RADIO },
      { label: "Range", path: pages.COMPONENTS_RANGE },
      { label: "FileInput", path: pages.COMPONENTS_FILE_INPUT },
      { label: "FormField", path: pages.COMPONENTS_FORM_FIELD },
    ],
  },
  {
    category: "データ表示",
    items: [
      { label: "Badge", path: pages.COMPONENTS_BADGE },
      { label: "Card", path: pages.COMPONENTS_CARD },
      { label: "Avatar", path: pages.COMPONENTS_AVATAR },
      { label: "Stat", path: pages.COMPONENTS_STAT },
      { label: "Table", path: pages.COMPONENTS_TABLE },
      { label: "Kbd", path: pages.COMPONENTS_KBD },
    ],
  },
  {
    category: "フィードバック",
    items: [
      { label: "Alert", path: pages.COMPONENTS_ALERT },
      { label: "Loading", path: pages.COMPONENTS_LOADING },
      { label: "Progress", path: pages.COMPONENTS_PROGRESS },
      { label: "Skeleton", path: pages.COMPONENTS_SKELETON },
      { label: "Tooltip", path: pages.COMPONENTS_TOOLTIP },
    ],
  },
  {
    category: "ナビゲーション",
    items: [
      { label: "Tabs", path: pages.COMPONENTS_TABS },
      { label: "Navbar", path: pages.COMPONENTS_NAVBAR },
      { label: "Breadcrumbs", path: pages.COMPONENTS_BREADCRUMBS },
      { label: "Menu", path: pages.COMPONENTS_MENU },
      { label: "Steps", path: pages.COMPONENTS_STEPS },
    ],
  },
  {
    category: "レイアウト",
    items: [
      { label: "Divider", path: pages.COMPONENTS_DIVIDER },
      { label: "Join", path: pages.COMPONENTS_JOIN },
      { label: "Collapse", path: pages.COMPONENTS_COLLAPSE },
    ],
  },
] as const;

export const ComponentsSideBar: FC = () => {
  return (
    <aside className="sticky top-0 h-screen w-56 shrink-0 overflow-y-auto border-r border-base-300 bg-base-100 p-4">
      <Link to={pages.COMPONENTS} className="mb-4 block text-lg font-bold">
        DaisyUI Components
      </Link>
      <ul className="menu menu-sm w-full p-0">
        {sidebarItems.map((group) => (
          <li key={group.category}>
            <span className="menu-title text-xs text-base-content/50">{group.category}</span>
            <ul>
              {group.items.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} activeProps={{ className: "active" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};
