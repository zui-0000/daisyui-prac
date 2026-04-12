import { Stat, StatDesc, StatFigure, StatTitle, StatValue, Stats } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const StatPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Stat"
        category="データ表示"
        description="数値や統計情報を表示するコンポーネントです。Stats > Stat > StatTitle / StatValue / StatDesc / StatFigure の構造で使います。"
      />

      <ComponentSection title="基本的な使い方" row={false}>
        <Stats shadow>
          <Stat>
            <StatTitle>総ユーザー数</StatTitle>
            <StatValue>31K</StatValue>
            <StatDesc>先月比 +21%</StatDesc>
          </Stat>
          <Stat>
            <StatTitle>新規登録</StatTitle>
            <StatValue color="primary">4,200</StatValue>
            <StatDesc>今月</StatDesc>
          </Stat>
          <Stat>
            <StatTitle>解約率</StatTitle>
            <StatValue color="error">1.8%</StatValue>
            <StatDesc>先月比 -0.3%</StatDesc>
          </Stat>
        </Stats>
      </ComponentSection>

      <ComponentSection title="アイコン付き" row={false}>
        <Stats shadow>
          <Stat>
            <StatFigure className="text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
                role="img"
                aria-label="情報"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </StatFigure>
            <StatTitle>ダウンロード数</StatTitle>
            <StatValue color="primary">31K</StatValue>
            <StatDesc>Jan 1st - Feb 1st</StatDesc>
          </Stat>
        </Stats>
      </ComponentSection>

      <ComponentSection title="横並び" row={false}>
        <Stats horizontal shadow className="w-full max-w-xl">
          <Stat>
            <StatTitle>収益</StatTitle>
            <StatValue>¥89,400</StatValue>
            <StatDesc>今月</StatDesc>
          </Stat>
          <Stat>
            <StatTitle>注文数</StatTitle>
            <StatValue color="success">1,200</StatValue>
            <StatDesc>+8% 先月比</StatDesc>
          </Stat>
        </Stats>
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default StatPage;
