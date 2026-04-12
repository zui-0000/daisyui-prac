import { Checkbox } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const CheckboxPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Checkbox"
        category="データ入力"
        description="チェックボックス入力です。color / checkboxSize Props で見た目を変更できます。label と組み合わせる場合は FormField を使ってください。"
      />

      <Section title="カラー">
        <Checkbox defaultChecked />
        <Checkbox color="primary" defaultChecked />
        <Checkbox color="secondary" defaultChecked />
        <Checkbox color="accent" defaultChecked />
        <Checkbox color="success" defaultChecked />
        <Checkbox color="warning" defaultChecked />
        <Checkbox color="error" defaultChecked />
      </Section>

      <Section title="サイズ">
        <Checkbox checkboxSize="xs" defaultChecked />
        <Checkbox checkboxSize="sm" defaultChecked />
        <Checkbox checkboxSize="md" defaultChecked />
        <Checkbox checkboxSize="lg" defaultChecked />
        <Checkbox checkboxSize="xl" defaultChecked />
      </Section>

      <Section title="状態">
        <label htmlFor="state-unchecked" className="flex items-center gap-2">
          <Checkbox id="state-unchecked" color="primary" />
          <span>未チェック</span>
        </label>
        <label htmlFor="state-checked" className="flex items-center gap-2">
          <Checkbox id="state-checked" color="primary" defaultChecked />
          <span>チェック済み</span>
        </label>
        <label htmlFor="state-disabled" className="flex items-center gap-2">
          <Checkbox id="state-disabled" disabled />
          <span>無効</span>
        </label>
      </Section>
    </div>
  </CommonLayout>
);

export default CheckboxPage;
