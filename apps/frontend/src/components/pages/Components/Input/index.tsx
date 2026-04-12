import { Input } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function InputPage() {
  return (
    <div>
      <PageHeader
        title="Input"
        category="データ入力"
        description="テキスト入力フィールドです。color / inputSize / ghost / bordered などの Props でスタイルを変更できます。"
      />

      <Section
        title="カラー"
        description="color prop でフォーカス時のカラーを変更します。"
        row={false}
      >
        <Input placeholder="デフォルト" />
        <Input color="primary" placeholder="Primary" />
        <Input color="secondary" placeholder="Secondary" />
        <Input color="accent" placeholder="Accent" />
        <Input color="info" placeholder="Info" />
        <Input color="success" placeholder="Success" />
        <Input color="warning" placeholder="Warning" />
        <Input color="error" placeholder="Error" />
      </Section>

      <Section title="サイズ" description="inputSize prop で xs / sm / md / lg / xl を指定します。">
        <Input inputSize="xs" placeholder="xs" />
        <Input inputSize="sm" placeholder="sm" />
        <Input inputSize="md" placeholder="md" />
        <Input inputSize="lg" placeholder="lg" />
        <Input inputSize="xl" placeholder="xl" />
      </Section>

      <Section title="スタイル" description="ghost / bordered prop でスタイルを変更します。">
        <Input bordered placeholder="Bordered" />
        <Input ghost placeholder="Ghost" className="bg-base-200" />
      </Section>
    </div>
  );
}
