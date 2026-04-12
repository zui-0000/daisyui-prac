import { Collapse, CollapseContent, CollapseTitle } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const CollapsePage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Collapse"
        category="レイアウト"
        description="クリックで折りたたみ・展開するアコーディオンコンポーネントです。arrow / plus prop でトグルアイコンを追加できます。"
      />

      <ComponentSection
        title="矢印アイコン"
        description="arrow prop で右側に矢印が付きます。"
        row={false}
      >
        <div className="w-full max-w-md">
          <Collapse arrow className="border border-base-300 bg-base-100">
            <CollapseTitle>クリックして展開</CollapseTitle>
            <CollapseContent>
              <p>
                展開されたコンテンツがここに表示されます。テキスト、リスト、画像など何でも配置できます。
              </p>
            </CollapseContent>
          </Collapse>
        </div>
      </ComponentSection>

      <ComponentSection
        title="プラスアイコン"
        description="plus prop で +/- アイコンになります。"
        row={false}
      >
        <div className="w-full max-w-md">
          <Collapse plus className="border border-base-300 bg-base-100">
            <CollapseTitle>よくある質問 1</CollapseTitle>
            <CollapseContent>回答のテキストがここに入ります。</CollapseContent>
          </Collapse>
          <Collapse plus className="border border-base-300 bg-base-100">
            <CollapseTitle>よくある質問 2</CollapseTitle>
            <CollapseContent>別の回答がここに入ります。</CollapseContent>
          </Collapse>
          <Collapse plus className="border border-base-300 bg-base-100">
            <CollapseTitle>よくある質問 3</CollapseTitle>
            <CollapseContent>また別の回答がここに入ります。</CollapseContent>
          </Collapse>
        </div>
      </ComponentSection>

      <ComponentSection
        title="open prop で制御"
        description="open prop で展開状態を固定します。"
        row={false}
      >
        <div className="w-full max-w-md">
          <Collapse open arrow className="border border-base-300 bg-base-100">
            <CollapseTitle>常に展開（open=true）</CollapseTitle>
            <CollapseContent>このセクションは常に展開されています。</CollapseContent>
          </Collapse>
          <Collapse open={false} arrow className="border border-base-300 bg-base-100">
            <CollapseTitle>常に折りたたみ（open=false）</CollapseTitle>
            <CollapseContent>このセクションは常に閉じています。</CollapseContent>
          </Collapse>
        </div>
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default CollapsePage;
