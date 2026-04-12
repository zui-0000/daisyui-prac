import { Select } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const SelectPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Select"
        category="データ入力"
        description="ドロップダウン選択UIです。children に option 要素を渡します。color / selectSize / bordered などの Props が使えます。"
      />

      <ComponentSection title="基本的な使い方">
        <Select defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option>オプション 1</option>
          <option>オプション 2</option>
          <option>オプション 3</option>
        </Select>
      </ComponentSection>

      <ComponentSection title="カラー" row={false}>
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
      </ComponentSection>

      <ComponentSection title="サイズ">
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
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default SelectPage;
