import { Button, Tooltip } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const TooltipPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Tooltip"
        category="フィードバック"
        description="要素にホバーしたときに説明テキストを表示するコンポーネントです。tip prop にテキストを渡し、position でツールチップの表示位置を指定します。"
      />

      <Section title="基本的な使い方" description="tip prop にツールチップのテキストを指定します。">
        <Tooltip tip="ここがツールチップです">
          <Button color="primary">ホバーしてみて</Button>
        </Tooltip>
      </Section>

      <Section
        title="表示位置"
        description="position prop で top / bottom / left / right を指定します。"
      >
        <Tooltip tip="上に表示" position="top">
          <Button size="sm">Top</Button>
        </Tooltip>
        <Tooltip tip="下に表示" position="bottom">
          <Button size="sm">Bottom</Button>
        </Tooltip>
        <Tooltip tip="左に表示" position="left">
          <Button size="sm">Left</Button>
        </Tooltip>
        <Tooltip tip="右に表示" position="right">
          <Button size="sm">Right</Button>
        </Tooltip>
      </Section>

      <Section title="カラー">
        <Tooltip tip="Primary" color="primary">
          <Button size="sm" color="primary">
            Primary
          </Button>
        </Tooltip>
        <Tooltip tip="Success" color="success">
          <Button size="sm" color="success">
            Success
          </Button>
        </Tooltip>
        <Tooltip tip="Warning" color="warning">
          <Button size="sm" color="warning">
            Warning
          </Button>
        </Tooltip>
        <Tooltip tip="Error" color="error">
          <Button size="sm" color="error">
            Error
          </Button>
        </Tooltip>
      </Section>

      <Section title="常に表示" description="open prop を付けると常にツールチップが表示されます。">
        <Tooltip tip="常に表示されます" open>
          <Button>Open Tooltip</Button>
        </Tooltip>
      </Section>
    </div>
  </CommonLayout>
);

export default TooltipPage;
