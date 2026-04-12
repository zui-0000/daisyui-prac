import { Badge, Card, CardBody, CardTitle } from "@packages/ui";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { CommonLayout } from "~/components/layouts/CommonLayout";
import { pages } from "~/constants/pages";

const componentList = [
  {
    label: "Button",
    path: pages.COMPONENTS.BUTTON,
    category: "アクション",
    desc: "クリック可能なボタン。color / size / variant 対応。",
  },
  {
    label: "Dropdown",
    path: pages.COMPONENTS.DROPDOWN,
    category: "アクション",
    desc: "クリックで展開するドロップダウンメニュー。",
  },
  {
    label: "Modal",
    path: pages.COMPONENTS.MODAL,
    category: "アクション",
    desc: "オーバーレイで表示するモーダルダイアログ。",
  },
  {
    label: "Input",
    path: pages.COMPONENTS.INPUT,
    category: "データ入力",
    desc: "テキスト入力フィールド。",
  },
  {
    label: "Textarea",
    path: pages.COMPONENTS.TEXTAREA,
    category: "データ入力",
    desc: "複数行テキスト入力。",
  },
  {
    label: "Select",
    path: pages.COMPONENTS.SELECT,
    category: "データ入力",
    desc: "ドロップダウン選択。",
  },
  {
    label: "Checkbox",
    path: pages.COMPONENTS.CHECKBOX,
    category: "データ入力",
    desc: "チェックボックス。",
  },
  {
    label: "Toggle",
    path: pages.COMPONENTS.TOGGLE,
    category: "データ入力",
    desc: "ON/OFF トグルスイッチ。",
  },
  { label: "Radio", path: pages.COMPONENTS.RADIO, category: "データ入力", desc: "ラジオボタン。" },
  {
    label: "Range",
    path: pages.COMPONENTS.RANGE,
    category: "データ入力",
    desc: "スライダー（範囲入力）。",
  },
  {
    label: "FileInput",
    path: pages.COMPONENTS.FILE_INPUT,
    category: "データ入力",
    desc: "ファイル選択入力。",
  },
  {
    label: "FormField",
    path: pages.COMPONENTS.FORM_FIELD,
    category: "データ入力",
    desc: "ラベル・エラー付きフォームフィールド。",
  },
  {
    label: "Badge",
    path: pages.COMPONENTS.BADGE,
    category: "データ表示",
    desc: "ラベルやステータス表示。",
  },
  {
    label: "Card",
    path: pages.COMPONENTS.CARD,
    category: "データ表示",
    desc: "コンテンツをまとめるカード。",
  },
  {
    label: "Avatar",
    path: pages.COMPONENTS.AVATAR,
    category: "データ表示",
    desc: "ユーザーアバター画像。",
  },
  {
    label: "Stat",
    path: pages.COMPONENTS.STAT,
    category: "データ表示",
    desc: "数値・統計の表示。",
  },
  {
    label: "Table",
    path: pages.COMPONENTS.TABLE,
    category: "データ表示",
    desc: "データテーブル。",
  },
  {
    label: "Kbd",
    path: pages.COMPONENTS.KBD,
    category: "データ表示",
    desc: "キーボードキーの表示。",
  },
  {
    label: "Alert",
    path: pages.COMPONENTS.ALERT,
    category: "フィードバック",
    desc: "情報・警告・エラーの通知。",
  },
  {
    label: "Loading",
    path: pages.COMPONENTS.LOADING,
    category: "フィードバック",
    desc: "ローディングアニメーション。",
  },
  {
    label: "Progress",
    path: pages.COMPONENTS.PROGRESS,
    category: "フィードバック",
    desc: "進捗バー。",
  },
  {
    label: "Skeleton",
    path: pages.COMPONENTS.SKELETON,
    category: "フィードバック",
    desc: "コンテンツ読み込み中のプレースホルダー。",
  },
  {
    label: "Tooltip",
    path: pages.COMPONENTS.TOOLTIP,
    category: "フィードバック",
    desc: "ホバー時に説明を表示するツールチップ。",
  },
  {
    label: "Tabs",
    path: pages.COMPONENTS.TABS,
    category: "ナビゲーション",
    desc: "タブ切り替えUI。",
  },
  {
    label: "Navbar",
    path: pages.COMPONENTS.NAVBAR,
    category: "ナビゲーション",
    desc: "ナビゲーションバー。",
  },
  {
    label: "Breadcrumbs",
    path: pages.COMPONENTS.BREADCRUMBS,
    category: "ナビゲーション",
    desc: "パンくずリスト。",
  },
  {
    label: "Menu",
    path: pages.COMPONENTS.MENU,
    category: "ナビゲーション",
    desc: "縦・横メニュー。",
  },
  {
    label: "Steps",
    path: pages.COMPONENTS.STEPS,
    category: "ナビゲーション",
    desc: "ステップ進捗表示。",
  },
  { label: "Divider", path: pages.COMPONENTS.DIVIDER, category: "レイアウト", desc: "区切り線。" },
  {
    label: "Join",
    path: pages.COMPONENTS.JOIN,
    category: "レイアウト",
    desc: "複数要素を結合するグループ。",
  },
  {
    label: "Collapse",
    path: pages.COMPONENTS.COLLAPSE,
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
