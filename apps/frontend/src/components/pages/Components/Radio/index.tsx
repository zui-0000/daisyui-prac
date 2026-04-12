import { Radio } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function RadioPage() {
  return (
    <div>
      <PageHeader
        title="Radio"
        category="データ入力"
        description="ラジオボタンです。同じ name を持つ Radio を並べることで、単一選択グループを形成します。"
      />

      <Section title="基本的な使い方" description="name prop を揃えることでグループになります。">
        <div className="flex flex-col gap-2">
          <label htmlFor="radio-a" className="flex items-center gap-2">
            <Radio id="radio-a" name="demo" color="primary" defaultChecked />
            <span>オプション A</span>
          </label>
          <label htmlFor="radio-b" className="flex items-center gap-2">
            <Radio id="radio-b" name="demo" color="primary" />
            <span>オプション B</span>
          </label>
          <label htmlFor="radio-c" className="flex items-center gap-2">
            <Radio id="radio-c" name="demo" color="primary" />
            <span>オプション C</span>
          </label>
        </div>
      </Section>

      <Section title="カラー">
        <Radio name="color" color="primary" defaultChecked />
        <Radio name="color" color="secondary" />
        <Radio name="color" color="accent" />
        <Radio name="color" color="success" />
        <Radio name="color" color="warning" />
        <Radio name="color" color="error" />
      </Section>

      <Section title="サイズ">
        <Radio name="size" radioSize="xs" defaultChecked />
        <Radio name="size" radioSize="sm" />
        <Radio name="size" radioSize="md" />
        <Radio name="size" radioSize="lg" />
        <Radio name="size" radioSize="xl" />
      </Section>
    </div>
  );
}
