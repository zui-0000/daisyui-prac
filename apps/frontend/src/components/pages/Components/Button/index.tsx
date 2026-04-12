import { Button } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function ButtonPage() {
  return (
    <div>
      <PageHeader
        title="Button"
        category="アクション"
        description="アクションをトリガーするインタラクティブな要素です。color / size / variant などの Props でスタイルを柔軟に変更できます。"
      />

      <Section title="カラー" description="color prop でボタンの意味合いを表します。">
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
      </Section>

      <Section
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
      </Section>

      <Section title="サイズ" description="size prop で xs / sm / md / lg / xl を指定します。">
        <Button size="xs">XSmall</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XLarge</Button>
      </Section>

      <Section title="形状" description="circle / square / wide / block で形状を変更します。">
        <Button color="primary" circle>
          +
        </Button>
        <Button color="secondary" square>
          ✓
        </Button>
        <Button color="accent" wide>
          Wide Button
        </Button>
      </Section>

      <Section title="状態" description="loading / active / disabled で状態を表現します。">
        <Button color="primary" loading>
          Loading
        </Button>
        <Button color="primary" active>
          Active
        </Button>
        <Button color="primary" disabled>
          Disabled
        </Button>
      </Section>
    </div>
  );
}
