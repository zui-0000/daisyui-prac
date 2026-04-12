import { Progress } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const ProgressPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Progress"
        category="フィードバック"
        description="タスクの進捗状況を表示するプログレスバーです。value と max（デフォルト 100）で進捗を指定します。"
      />

      <ComponentSection title="基本的な使い方" row={false}>
        <Progress color="primary" value={70} className="w-full max-w-md" />
      </ComponentSection>

      <ComponentSection title="カラー" row={false}>
        <Progress color="primary" value={60} className="w-full max-w-md" />
        <Progress color="secondary" value={45} className="w-full max-w-md" />
        <Progress color="accent" value={30} className="w-full max-w-md" />
        <Progress color="success" value={80} className="w-full max-w-md" />
        <Progress color="warning" value={55} className="w-full max-w-md" />
        <Progress color="error" value={25} className="w-full max-w-md" />
      </ComponentSection>

      <ComponentSection
        title="不確定状態"
        description="value を省略するとアニメーション付きの不確定プログレスになります。"
        row={false}
      >
        <Progress color="primary" className="w-full max-w-md" />
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default ProgressPage;
