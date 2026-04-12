import { Badge } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const BadgePage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Badge"
        category="データ表示"
        description="ラベル・ステータス・カウントなどを示す小さなバッジです。color / size / outline / dash Props でスタイルを変更できます。"
      />

      <ComponentSection title="カラー">
        <Badge>デフォルト</Badge>
        <Badge color="neutral">Neutral</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="accent">Accent</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="error">Error</Badge>
        <Badge color="ghost">Ghost</Badge>
      </ComponentSection>

      <ComponentSection title="バリアント">
        <Badge color="primary" outline>
          Outline
        </Badge>
        <Badge color="secondary" outline>
          Outline
        </Badge>
        <Badge color="primary" dash>
          Dash
        </Badge>
      </ComponentSection>

      <ComponentSection title="サイズ">
        <Badge color="primary" size="xs">
          XSmall
        </Badge>
        <Badge color="primary" size="sm">
          Small
        </Badge>
        <Badge color="primary" size="md">
          Medium
        </Badge>
        <Badge color="primary" size="lg">
          Large
        </Badge>
        <Badge color="primary" size="xl">
          XLarge
        </Badge>
      </ComponentSection>

      <ComponentSection
        title="テキストと組み合わせ"
        description="テキスト内に埋め込んだり、ボタンと組み合わせて使います。"
      >
        <span className="text-base font-medium">
          メッセージ{" "}
          <Badge color="error" size="sm">
            99+
          </Badge>
        </span>
        <span className="text-base font-medium">
          通知{" "}
          <Badge color="info" size="xs">
            NEW
          </Badge>
        </span>
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default BadgePage;
