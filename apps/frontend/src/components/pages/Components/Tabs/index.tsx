import { Tab, Tabs } from "@packages/ui";
import { useState } from "react";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <PageHeader
        title="Tabs"
        category="ナビゲーション"
        description="コンテンツを切り替えるタブUIです。Tabs に variant prop でスタイルを指定し、Tab の active prop でアクティブ状態を表します。"
      />

      <Section
        title="バリアント"
        description="variant prop で boxed / bordered / lifted を指定します。"
        row={false}
      >
        <div>
          <p className="mb-2 text-sm text-base-content/60">bordered（デフォルト）</p>
          <Tabs variant="bordered">
            <Tab active>タブ 1</Tab>
            <Tab>タブ 2</Tab>
            <Tab>タブ 3</Tab>
          </Tabs>
        </div>
        <div>
          <p className="mb-2 text-sm text-base-content/60">boxed</p>
          <Tabs variant="boxed">
            <Tab active>タブ 1</Tab>
            <Tab>タブ 2</Tab>
            <Tab>タブ 3</Tab>
          </Tabs>
        </div>
        <div>
          <p className="mb-2 text-sm text-base-content/60">lifted</p>
          <Tabs variant="lifted">
            <Tab active>タブ 1</Tab>
            <Tab>タブ 2</Tab>
            <Tab>タブ 3</Tab>
          </Tabs>
        </div>
      </Section>

      <Section
        title="インタラクティブな例"
        description="useState でアクティブタブを管理します。"
        row={false}
      >
        <div className="w-full max-w-md">
          <Tabs variant="boxed">
            {["概要", "詳細", "設定"].map((label, i) => (
              <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
                {label}
              </Tab>
            ))}
          </Tabs>
          <div className="mt-4 rounded-xl border border-base-300 p-4">
            {activeTab === 0 && <p className="text-sm">概要タブのコンテンツです。</p>}
            {activeTab === 1 && <p className="text-sm">詳細タブのコンテンツです。</p>}
            {activeTab === 2 && <p className="text-sm">設定タブのコンテンツです。</p>}
          </div>
        </div>
      </Section>

      <Section title="サイズ">
        <Tabs variant="bordered" tabsSize="xs">
          <Tab active>XS</Tab>
          <Tab>Tab</Tab>
        </Tabs>
        <Tabs variant="bordered" tabsSize="sm">
          <Tab active>SM</Tab>
          <Tab>Tab</Tab>
        </Tabs>
        <Tabs variant="bordered" tabsSize="md">
          <Tab active>MD</Tab>
          <Tab>Tab</Tab>
        </Tabs>
        <Tabs variant="bordered" tabsSize="lg">
          <Tab active>LG</Tab>
          <Tab>Tab</Tab>
        </Tabs>
      </Section>
    </div>
  );
}
