import { Select } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function SelectPage() {
  return (
    <div>
      <PageHeader
        title="Select"
        category="データ入力"
        description="ドロップダウン選択UIです。children に option 要素を渡します。color / selectSize / bordered などの Props が使えます。"
      />

      <Section title="基本的な使い方">
        <Select defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option>オプション 1</option>
          <option>オプション 2</option>
          <option>オプション 3</option>
        </Select>
      </Section>

      <Section title="カラー" row={false}>
        <Select color="primary">
          <option>Primary</option>
        </Select>
        <Select color="secondary">
          <option>Secondary</option>
        </Select>
        <Select color="success">
          <option>Success</option>
        </Select>
        <Select color="error">
          <option>Error</option>
        </Select>
      </Section>

      <Section title="サイズ">
        <Select selectSize="xs">
          <option>XSmall</option>
        </Select>
        <Select selectSize="sm">
          <option>Small</option>
        </Select>
        <Select selectSize="md">
          <option>Medium</option>
        </Select>
        <Select selectSize="lg">
          <option>Large</option>
        </Select>
      </Section>
    </div>
  );
}
