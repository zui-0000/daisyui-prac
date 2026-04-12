import { Skeleton } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const SkeletonPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Skeleton"
        category="フィードバック"
        description="コンテンツの読み込み中に表示するプレースホルダーです。width / height を Tailwind クラスで指定して使います。"
      />

      <Section title="基本的な使い方" description="サイズは className で指定します。">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
      </Section>

      <Section title="カードのスケルトン" row={false}>
        <div className="flex w-72 flex-col gap-3 rounded-xl bg-base-100 p-4 shadow">
          <div className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-3/5" />
        </div>
      </Section>

      <Section title="テキストのスケルトン" row={false}>
        <div className="w-full max-w-md space-y-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </Section>
    </div>
  </CommonLayout>
);

export default SkeletonPage;
