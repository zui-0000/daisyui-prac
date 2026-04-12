import { Progress } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function ProgressPage() {
  return (
    <div>
      <PageHeader
        title="Progress"
        category="フィードバック"
        description="タスクの進捗状況を表示するプログレスバーです。value と max（デフォルト 100）で進捗を指定します。"
      />

      <Section title="基本的な使い方" row={false}>
        <Progress color="primary" value={70} className="w-full max-w-md" />
      </Section>

      <Section title="カラー" row={false}>
        <Progress color="primary" value={60} className="w-full max-w-md" />
        <Progress color="secondary" value={45} className="w-full max-w-md" />
        <Progress color="accent" value={30} className="w-full max-w-md" />
        <Progress color="success" value={80} className="w-full max-w-md" />
        <Progress color="warning" value={55} className="w-full max-w-md" />
        <Progress color="error" value={25} className="w-full max-w-md" />
      </Section>

      <Section
        title="不確定状態"
        description="value を省略するとアニメーション付きの不確定プログレスになります。"
        row={false}
      >
        <Progress color="primary" className="w-full max-w-md" />
      </Section>
    </div>
  );
}
