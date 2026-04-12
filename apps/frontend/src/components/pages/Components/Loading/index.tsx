import { Loading } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function LoadingPage() {
  return (
    <div>
      <PageHeader
        title="Loading"
        category="フィードバック"
        description="ローディング状態を示すアニメーションコンポーネントです。variant で spinner / dots / ring / ball / bars / infinity の 6 種類から選べます。"
      />

      <Section title="バリアント" description="variant prop でアニメーションの種類を変更します。">
        <div className="flex flex-col items-center gap-1">
          <Loading variant="spinner" />
          <span className="text-xs">spinner</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Loading variant="dots" />
          <span className="text-xs">dots</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Loading variant="ring" />
          <span className="text-xs">ring</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Loading variant="ball" />
          <span className="text-xs">ball</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Loading variant="bars" />
          <span className="text-xs">bars</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Loading variant="infinity" />
          <span className="text-xs">infinity</span>
        </div>
      </Section>

      <Section title="カラー">
        <Loading variant="spinner" color="primary" />
        <Loading variant="spinner" color="secondary" />
        <Loading variant="spinner" color="accent" />
        <Loading variant="spinner" color="success" />
        <Loading variant="spinner" color="warning" />
        <Loading variant="spinner" color="error" />
      </Section>

      <Section title="サイズ">
        <Loading variant="spinner" loadingSize="xs" />
        <Loading variant="spinner" loadingSize="sm" />
        <Loading variant="spinner" loadingSize="md" />
        <Loading variant="spinner" loadingSize="lg" />
        <Loading variant="spinner" loadingSize="xl" />
      </Section>
    </div>
  );
}
