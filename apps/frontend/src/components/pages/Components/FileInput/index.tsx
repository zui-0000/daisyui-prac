import { FileInput } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const FileInputPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="FileInput"
        category="データ入力"
        description="ファイル選択入力フィールドです。color / fileInputSize / ghost / bordered Props が使えます。"
      />

      <Section title="基本的な使い方" row={false}>
        <FileInput className="w-full max-w-sm" />
      </Section>

      <Section title="カラー" row={false}>
        <FileInput color="primary" className="w-full max-w-sm" />
        <FileInput color="secondary" className="w-full max-w-sm" />
        <FileInput color="success" className="w-full max-w-sm" />
        <FileInput color="error" className="w-full max-w-sm" />
      </Section>

      <Section title="サイズ" row={false}>
        <FileInput fileInputSize="xs" className="w-full max-w-sm" />
        <FileInput fileInputSize="sm" className="w-full max-w-sm" />
        <FileInput fileInputSize="md" className="w-full max-w-sm" />
        <FileInput fileInputSize="lg" className="w-full max-w-sm" />
      </Section>

      <Section title="複数ファイル" row={false}>
        <FileInput multiple className="w-full max-w-sm" />
      </Section>
    </div>
  </CommonLayout>
);

export default FileInputPage;
