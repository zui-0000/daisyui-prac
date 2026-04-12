import { Toggle } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function TogglePage() {
  return (
    <div>
      <PageHeader
        title="Toggle"
        category="データ入力"
        description="ON/OFF を切り替えるトグルスイッチです。内部的には checkbox として実装されています。"
      />

      <Section title="カラー">
        <Toggle defaultChecked />
        <Toggle color="primary" defaultChecked />
        <Toggle color="secondary" defaultChecked />
        <Toggle color="accent" defaultChecked />
        <Toggle color="success" defaultChecked />
        <Toggle color="warning" defaultChecked />
        <Toggle color="error" defaultChecked />
      </Section>

      <Section title="サイズ">
        <Toggle toggleSize="xs" defaultChecked />
        <Toggle toggleSize="sm" defaultChecked />
        <Toggle toggleSize="md" defaultChecked />
        <Toggle toggleSize="lg" defaultChecked />
        <Toggle toggleSize="xl" defaultChecked />
      </Section>

      <Section title="状態">
        <label htmlFor="toggle-off" className="flex items-center gap-2">
          <Toggle id="toggle-off" color="primary" />
          <span>OFF</span>
        </label>
        <label htmlFor="toggle-on" className="flex items-center gap-2">
          <Toggle id="toggle-on" color="primary" defaultChecked />
          <span>ON</span>
        </label>
        <label htmlFor="toggle-disabled" className="flex items-center gap-2">
          <Toggle id="toggle-disabled" disabled />
          <span>無効</span>
        </label>
      </Section>
    </div>
  );
}
