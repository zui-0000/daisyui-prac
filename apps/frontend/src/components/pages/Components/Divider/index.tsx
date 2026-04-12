import { Divider } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const DividerPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Divider"
        category="レイアウト"
        description="コンテンツを視覚的に区切る区切り線です。テキストや children を渡すと中央に表示されます。color / position / vertical Props が使えます。"
      />

      <ComponentSection title="基本的な使い方" row={false}>
        <div className="w-full max-w-md">
          <p>上のコンテンツ</p>
          <Divider />
          <p>下のコンテンツ</p>
        </div>
      </ComponentSection>

      <ComponentSection title="テキスト付き" row={false}>
        <div className="w-full max-w-md">
          <Divider>OR</Divider>
        </div>
        <div className="w-full max-w-md">
          <Divider>セクション区切り</Divider>
        </div>
      </ComponentSection>

      <ComponentSection title="カラー" row={false}>
        <div className="w-full max-w-md">
          <Divider color="primary">Primary</Divider>
          <Divider color="secondary">Secondary</Divider>
          <Divider color="accent">Accent</Divider>
          <Divider color="success">Success</Divider>
          <Divider color="warning">Warning</Divider>
          <Divider color="error">Error</Divider>
        </div>
      </ComponentSection>

      <ComponentSection
        title="縦方向"
        description="vertical prop + flex コンテナで縦の区切り線になります。"
      >
        <div className="flex h-20 items-center">
          <span>左</span>
          <Divider vertical />
          <span>右</span>
        </div>
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default DividerPage;
