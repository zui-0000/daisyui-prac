import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { pages } from "~/constants/pages";

const sidebarItems = [
  {
    category: "アクション",
    items: [
      { label: "Button", path: pages.COMPONENTS.BUTTON },
      { label: "Dropdown", path: pages.COMPONENTS.DROPDOWN },
      { label: "Modal", path: pages.COMPONENTS.MODAL },
    ],
  },
  {
    category: "データ入力",
    items: [
      { label: "Input", path: pages.COMPONENTS.INPUT },
      { label: "Textarea", path: pages.COMPONENTS.TEXTAREA },
      { label: "Select", path: pages.COMPONENTS.SELECT },
      { label: "Checkbox", path: pages.COMPONENTS.CHECKBOX },
      { label: "Toggle", path: pages.COMPONENTS.TOGGLE },
      { label: "Radio", path: pages.COMPONENTS.RADIO },
      { label: "Range", path: pages.COMPONENTS.RANGE },
      { label: "FileInput", path: pages.COMPONENTS.FILE_INPUT },
      { label: "FormField", path: pages.COMPONENTS.FORM_FIELD },
    ],
  },
  {
    category: "データ表示",
    items: [
      { label: "Badge", path: pages.COMPONENTS.BADGE },
      { label: "Card", path: pages.COMPONENTS.CARD },
      { label: "Avatar", path: pages.COMPONENTS.AVATAR },
      { label: "Stat", path: pages.COMPONENTS.STAT },
      { label: "Table", path: pages.COMPONENTS.TABLE },
      { label: "Kbd", path: pages.COMPONENTS.KBD },
    ],
  },
  {
    category: "フィードバック",
    items: [
      { label: "Alert", path: pages.COMPONENTS.ALERT },
      { label: "Loading", path: pages.COMPONENTS.LOADING },
      { label: "Progress", path: pages.COMPONENTS.PROGRESS },
      { label: "Skeleton", path: pages.COMPONENTS.SKELETON },
      { label: "Tooltip", path: pages.COMPONENTS.TOOLTIP },
    ],
  },
  {
    category: "ナビゲーション",
    items: [
      { label: "Tabs", path: pages.COMPONENTS.TABS },
      { label: "Navbar", path: pages.COMPONENTS.NAVBAR },
      { label: "Breadcrumbs", path: pages.COMPONENTS.BREADCRUMBS },
      { label: "Menu", path: pages.COMPONENTS.MENU },
      { label: "Steps", path: pages.COMPONENTS.STEPS },
    ],
  },
  {
    category: "レイアウト",
    items: [
      { label: "Divider", path: pages.COMPONENTS.DIVIDER },
      { label: "Join", path: pages.COMPONENTS.JOIN },
      { label: "Collapse", path: pages.COMPONENTS.COLLAPSE },
    ],
  },
] as const;

export const ComponentsSideBar: FC = () => {
  return (
    <aside className="sticky top-0 h-screen w-56 shrink-0 overflow-y-auto border-r border-base-300 bg-base-100 p-4">
      <Link to={pages.COMPONENTS.INDEX} className="mb-4 block text-lg font-bold">
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
