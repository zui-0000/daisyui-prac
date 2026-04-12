import { Range } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const RangePage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Range"
        category="データ入力"
        description="スライダー（範囲入力）です。HTML の range input をラップしており、min / max / step など標準属性がそのまま使えます。"
      />

      <ComponentSection title="基本的な使い方" row={false}>
        <Range color="primary" defaultValue={40} min={0} max={100} className="w-full max-w-md" />
      </ComponentSection>

      <ComponentSection title="カラー" row={false}>
        <Range color="primary" defaultValue={60} className="w-full max-w-md" />
        <Range color="secondary" defaultValue={60} className="w-full max-w-md" />
        <Range color="accent" defaultValue={60} className="w-full max-w-md" />
        <Range color="success" defaultValue={60} className="w-full max-w-md" />
        <Range color="warning" defaultValue={60} className="w-full max-w-md" />
        <Range color="error" defaultValue={60} className="w-full max-w-md" />
      </ComponentSection>

      <ComponentSection title="サイズ" row={false}>
        <Range rangeSize="xs" defaultValue={50} className="w-full max-w-md" />
        <Range rangeSize="sm" defaultValue={50} className="w-full max-w-md" />
        <Range rangeSize="md" defaultValue={50} className="w-full max-w-md" />
        <Range rangeSize="lg" defaultValue={50} className="w-full max-w-md" />
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default RangePage;
