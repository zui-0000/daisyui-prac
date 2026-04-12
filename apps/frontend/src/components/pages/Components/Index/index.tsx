import { Badge, Card, CardBody, CardTitle } from "@packages/ui";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { CommonLayout } from "~/components/layouts/CommonLayout";
import { pages } from "~/constants/pages";

const componentList = [
  {
    label: "Button",
    path: pages.COMPONENTS_BUTTON,
    category: "アクション",
    desc: "クリック可能なボタン。color / size / variant 対応。",
  },
  {
    label: "Dropdown",
    path: pages.COMPONENTS_DROPDOWN,
    category: "アクション",
    desc: "クリックで展開するドロップダウンメニュー。",
  },
  {
    label: "Modal",
    path: pages.COMPONENTS_MODAL,
    category: "アクション",
    desc: "オーバーレイで表示するモーダルダイアログ。",
  },
  {
    label: "Input",
    path: pages.COMPONENTS_INPUT,
    category: "データ入力",
    desc: "テキスト入力フィールド。",
  },
  {
    label: "Textarea",
    path: pages.COMPONENTS_TEXTAREA,
    category: "データ入力",
    desc: "複数行テキスト入力。",
  },
  {
    label: "Select",
    path: pages.COMPONENTS_SELECT,
    category: "データ入力",
    desc: "ドロップダウン選択。",
  },
  {
    label: "Checkbox",
    path: pages.COMPONENTS_CHECKBOX,
    category: "データ入力",
    desc: "チェックボックス。",
  },
  {
    label: "Toggle",
    path: pages.COMPONENTS_TOGGLE,
    category: "データ入力",
    desc: "ON/OFF トグルスイッチ。",
  },
  { label: "Radio", path: pages.COMPONENTS_RADIO, category: "データ入力", desc: "ラジオボタン。" },
  {
    label: "Range",
    path: pages.COMPONENTS_RANGE,
    category: "データ入力",
    desc: "スライダー（範囲入力）。",
  },
  {
    label: "FileInput",
    path: pages.COMPONENTS_FILE_INPUT,
    category: "データ入力",
    desc: "ファイル選択入力。",
  },
  {
    label: "FormField",
    path: pages.COMPONENTS_FORM_FIELD,
    category: "データ入力",
    desc: "ラベル・エラー付きフォームフィールド。",
  },
  {
    label: "Badge",
    path: pages.COMPONENTS_BADGE,
    category: "データ表示",
    desc: "ラベルやステータス表示。",
  },
  {
    label: "Card",
    path: pages.COMPONENTS_CARD,
    category: "データ表示",
    desc: "コンテンツをまとめるカード。",
  },
  {
    label: "Avatar",
    path: pages.COMPONENTS_AVATAR,
    category: "データ表示",
    desc: "ユーザーアバター画像。",
  },
  {
    label: "Stat",
    path: pages.COMPONENTS_STAT,
    category: "データ表示",
    desc: "数値・統計の表示。",
  },
  {
    label: "Table",
    path: pages.COMPONENTS_TABLE,
    category: "データ表示",
    desc: "データテーブル。",
  },
  {
    label: "Kbd",
    path: pages.COMPONENTS_KBD,
    category: "データ表示",
    desc: "キーボードキーの表示。",
  },
  {
    label: "Alert",
    path: pages.COMPONENTS_ALERT,
    category: "フィードバック",
    desc: "情報・警告・エラーの通知。",
  },
  {
    label: "Loading",
    path: pages.COMPONENTS_LOADING,
    category: "フィードバック",
    desc: "ローディングアニメーション。",
  },
  {
    label: "Progress",
    path: pages.COMPONENTS_PROGRESS,
    category: "フィードバック",
    desc: "進捗バー。",
  },
  {
    label: "Skeleton",
    path: pages.COMPONENTS_SKELETON,
    category: "フィードバック",
    desc: "コンテンツ読み込み中のプレースホルダー。",
  },
  {
    label: "Tooltip",
    path: pages.COMPONENTS_TOOLTIP,
    category: "フィードバック",
    desc: "ホバー時に説明を表示するツールチップ。",
  },
  {
    label: "Tabs",
    path: pages.COMPONENTS_TABS,
    category: "ナビゲーション",
    desc: "タブ切り替えUI。",
  },
  {
    label: "Navbar",
    path: pages.COMPONENTS_NAVBAR,
    category: "ナビゲーション",
    desc: "ナビゲーションバー。",
  },
  {
    label: "Breadcrumbs",
    path: pages.COMPONENTS_BREADCRUMBS,
    category: "ナビゲーション",
    desc: "パンくずリスト。",
  },
  {
    label: "Menu",
    path: pages.COMPONENTS_MENU,
    category: "ナビゲーション",
    desc: "縦・横メニュー。",
  },
  {
    label: "Steps",
    path: pages.COMPONENTS_STEPS,
    category: "ナビゲーション",
    desc: "ステップ進捗表示。",
  },
  { label: "Divider", path: pages.COMPONENTS_DIVIDER, category: "レイアウト", desc: "区切り線。" },
  {
    label: "Join",
    path: pages.COMPONENTS_JOIN,
    category: "レイアウト",
    desc: "複数要素を結合するグループ。",
  },
  {
    label: "Collapse",
    path: pages.COMPONENTS_COLLAPSE,
    category: "レイアウト",
    desc: "アコーディオン形式の折りたたみ。",
  },
];

const categories = [...new Set(componentList.map((c) => c.category))];

export const ComponentsIndexPage: FC = () => (
  <CommonLayout>
    <div>
      <div className="mb-10">
        <h1 className="mb-3 text-4xl font-bold">DaisyUI Components</h1>
        <p className="text-lg text-base-content/70">
          このプロジェクトで用意した DaisyUI ラッパーコンポーネントの一覧です。
          各コンポーネントのページでバリエーションや使い方を確認できます。
        </p>
      </div>
      {categories.map((category) => (
        <section key={category} className="mb-10">
          <h2 className="mb-4 border-b border-base-300 pb-2 text-xl font-bold">{category}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {componentList
              .filter((c) => c.category === category)
              .map((comp) => (
                <Link key={comp.path} to={comp.path}>
                  <Card bordered className="hover:border-primary hover:shadow-md transition-all">
                    <CardBody>
                      <CardTitle>{comp.label}</CardTitle>
                      <p className="text-sm text-base-content/60">{comp.desc}</p>
                      <div className="mt-2">
                        <Badge color="primary" size="sm">
                          {comp.category}
                        </Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  </CommonLayout>
);

export default ComponentsIndexPage;
