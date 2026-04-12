import { Step, Steps } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const StepsPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Steps"
        category="ナビゲーション"
        description="多段階のプロセスを示すステップインジケーターです。Step に color を指定するとその色でハイライトされます。dataContent で内容を表示できます。"
      />

      <ComponentSection title="基本的な使い方" row={false}>
        <Steps>
          <Step color="primary">登録</Step>
          <Step color="primary">確認</Step>
          <Step color="primary">支払い</Step>
          <Step>完了</Step>
        </Steps>
      </ComponentSection>

      <ComponentSection title="カラー" row={false}>
        <Steps>
          <Step color="primary">Primary</Step>
          <Step color="secondary">Secondary</Step>
          <Step color="accent">Accent</Step>
          <Step color="success">Success</Step>
          <Step>未完了</Step>
        </Steps>
      </ComponentSection>

      <ComponentSection
        title="dataContent（アイコン表示）"
        description="dataContent prop でチェックマークや数字を表示します。"
        row={false}
      >
        <Steps>
          <Step color="success" dataContent="✓">
            完了
          </Step>
          <Step color="success" dataContent="✓">
            完了
          </Step>
          <Step color="primary" dataContent="●">
            進行中
          </Step>
          <Step dataContent="?">未着手</Step>
        </Steps>
      </ComponentSection>

      <ComponentSection
        title="縦並び"
        description="vertical prop で縦方向のステップになります。"
        row={false}
      >
        <Steps vertical>
          <Step color="success">アカウント作成</Step>
          <Step color="success">プロフィール設定</Step>
          <Step color="primary">支払い方法登録</Step>
          <Step>開始</Step>
        </Steps>
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default StepsPage;
