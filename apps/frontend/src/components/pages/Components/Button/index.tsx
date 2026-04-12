import { Button } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const ButtonPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Button"
        category="アクション"
        description="アクションをトリガーするインタラクティブな要素です。color / size / variant などの Props でスタイルを柔軟に変更できます。"
      />

      <ComponentSection title="カラー" description="color prop でボタンの意味合いを表します。">
        <Button>デフォルト</Button>
        <Button color="neutral">Neutral</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="accent">Accent</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="ghost">Ghost</Button>
        <Button color="link">Link</Button>
      </ComponentSection>

      <ComponentSection
        title="バリアント"
        description="variant prop でアウトライン・ソフト・破線スタイルに変更します。"
      >
        <Button color="primary" variant="outline">
          Outline
        </Button>
        <Button color="secondary" variant="outline">
          Outline
        </Button>
        <Button color="primary" variant="soft">
          Soft
        </Button>
        <Button color="primary" variant="dash">
          Dash
        </Button>
      </ComponentSection>

      <ComponentSection
        title="サイズ"
        description="size prop で xs / sm / md / lg / xl を指定します。"
      >
        <Button size="xs">XSmall</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XLarge</Button>
      </ComponentSection>

      <ComponentSection
        title="形状"
        description="circle / square / wide / block で形状を変更します。"
      >
        <Button color="primary" circle>
          +
        </Button>
        <Button color="secondary" square>
          ✓
        </Button>
        <Button color="accent" wide>
          Wide Button
        </Button>
      </ComponentSection>

      <ComponentSection title="状態" description="loading / active / disabled で状態を表現します。">
        <Button color="primary" loading>
          Loading
        </Button>
        <Button color="primary" active>
          Active
        </Button>
        <Button color="primary" disabled>
          Disabled
        </Button>
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default ButtonPage;
