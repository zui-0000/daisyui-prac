import { FileInput } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const FileInputPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="FileInput"
        category="データ入力"
        description="ファイル選択入力フィールドです。color / fileInputSize / ghost / bordered Props が使えます。"
      />

      <ComponentSection title="基本的な使い方" row={false}>
        <FileInput className="w-full max-w-sm" />
      </ComponentSection>

      <ComponentSection title="カラー" row={false}>
        <FileInput color="primary" className="w-full max-w-sm" />
        <FileInput color="secondary" className="w-full max-w-sm" />
        <FileInput color="success" className="w-full max-w-sm" />
        <FileInput color="error" className="w-full max-w-sm" />
      </ComponentSection>

      <ComponentSection title="サイズ" row={false}>
        <FileInput fileInputSize="xs" className="w-full max-w-sm" />
        <FileInput fileInputSize="sm" className="w-full max-w-sm" />
        <FileInput fileInputSize="md" className="w-full max-w-sm" />
        <FileInput fileInputSize="lg" className="w-full max-w-sm" />
      </ComponentSection>

      <ComponentSection title="複数ファイル" row={false}>
        <FileInput multiple className="w-full max-w-sm" />
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default FileInputPage;
