import { Kbd } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/ComponentPageHeader";
import { Section } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const KbdPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Kbd"
        category="データ表示"
        description="キーボードキーを視覚的に表示するコンポーネントです。ショートカットキーの説明などに使います。"
      />

      <Section title="基本的な使い方">
        <Kbd>A</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Esc</Kbd>
        <Kbd>Tab</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>Ctrl</Kbd>
      </Section>

      <Section title="サイズ" description="kbdSize prop でサイズを変更します。">
        <Kbd kbdSize="xs">xs</Kbd>
        <Kbd kbdSize="sm">sm</Kbd>
        <Kbd kbdSize="md">md</Kbd>
        <Kbd kbdSize="lg">lg</Kbd>
        <Kbd kbdSize="xl">xl</Kbd>
      </Section>

      <Section
        title="ショートカット表示"
        description="テキストや + と組み合わせてショートカットキーを表現します。"
      >
        <span className="flex items-center gap-1 text-sm">
          <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
        </span>
        <span className="flex items-center gap-1 text-sm">
          <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
        </span>
        <span className="flex items-center gap-1 text-sm">
          <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
        </span>
      </Section>
    </div>
  </CommonLayout>
);

export default KbdPage;
