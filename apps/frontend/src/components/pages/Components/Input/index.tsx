import { Input } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const InputPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Input"
        category="データ入力"
        description="テキスト入力フィールドです。color / inputSize / ghost / bordered などの Props でスタイルを変更できます。"
      />

      <ComponentSection
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
      </ComponentSection>

      <ComponentSection
        title="サイズ"
        description="inputSize prop で xs / sm / md / lg / xl を指定します。"
      >
        <Input inputSize="xs" placeholder="xs" />
        <Input inputSize="sm" placeholder="sm" />
        <Input inputSize="md" placeholder="md" />
        <Input inputSize="lg" placeholder="lg" />
        <Input inputSize="xl" placeholder="xl" />
      </ComponentSection>

      <ComponentSection
        title="スタイル"
        description="ghost / bordered prop でスタイルを変更します。"
      >
        <Input bordered placeholder="Bordered" />
        <Input ghost placeholder="Ghost" className="bg-base-200" />
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default InputPage;
