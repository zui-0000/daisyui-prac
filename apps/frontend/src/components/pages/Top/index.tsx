import { Badge, Button } from "@packages/ui";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { pages } from "~/constants/pages";

export const TopPage: FC = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
    <Badge color="primary" size="lg">
      DaisyUI Showcase
    </Badge>
    <h1 className="text-5xl font-bold">DaisyUI Components</h1>
    <p className="max-w-md text-lg text-base-content/70">
      このプロジェクトで用意した DaisyUI ラッパーコンポーネントの一覧です。
      各コンポーネントの使い方とバリエーションを確認できます。
    </p>
    <Link to={pages.COMPONENTS.INDEX}>
      <Button color="primary" size="lg">
        コンポーネントを見る →
      </Button>
    </Link>
  </div>
);

export default TopPage;
