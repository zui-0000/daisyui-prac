import { Textarea } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/ComponentPageHeader";
import { Section } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const TextareaPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Textarea"
        category="データ入力"
        description="複数行のテキスト入力フィールドです。Input と同様に color / textareaSize / ghost / bordered Props を持ちます。"
      />

      <Section
        title="カラー"
        description="color prop でフォーカス時のカラーを変更します。"
        row={false}
      >
        <Textarea placeholder="デフォルト" />
        <Textarea color="primary" placeholder="Primary" />
        <Textarea color="success" placeholder="Success" />
        <Textarea color="error" placeholder="Error" />
      </Section>

      <Section title="サイズ" description="textareaSize prop でサイズを変更します。">
        <Textarea textareaSize="sm" placeholder="Small" />
        <Textarea textareaSize="md" placeholder="Medium" />
        <Textarea textareaSize="lg" placeholder="Large" />
      </Section>

      <Section title="スタイル">
        <Textarea bordered placeholder="Bordered" />
        <Textarea ghost placeholder="Ghost" className="bg-base-200" />
      </Section>
    </div>
  </CommonLayout>
);

export default TextareaPage;
