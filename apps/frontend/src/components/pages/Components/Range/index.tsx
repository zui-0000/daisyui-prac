import { Range } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function RangePage() {
  return (
    <div>
      <PageHeader
        title="Range"
        category="データ入力"
        description="スライダー（範囲入力）です。HTML の range input をラップしており、min / max / step など標準属性がそのまま使えます。"
      />

      <Section title="基本的な使い方" row={false}>
        <Range color="primary" defaultValue={40} min={0} max={100} className="w-full max-w-md" />
      </Section>

      <Section title="カラー" row={false}>
        <Range color="primary" defaultValue={60} className="w-full max-w-md" />
        <Range color="secondary" defaultValue={60} className="w-full max-w-md" />
        <Range color="accent" defaultValue={60} className="w-full max-w-md" />
        <Range color="success" defaultValue={60} className="w-full max-w-md" />
        <Range color="warning" defaultValue={60} className="w-full max-w-md" />
        <Range color="error" defaultValue={60} className="w-full max-w-md" />
      </Section>

      <Section title="サイズ" row={false}>
        <Range rangeSize="xs" defaultValue={50} className="w-full max-w-md" />
        <Range rangeSize="sm" defaultValue={50} className="w-full max-w-md" />
        <Range rangeSize="md" defaultValue={50} className="w-full max-w-md" />
        <Range rangeSize="lg" defaultValue={50} className="w-full max-w-md" />
      </Section>
    </div>
  );
}
