import { BreadcrumbItem, Breadcrumbs } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function BreadcrumbsPage() {
  return (
    <div>
      <PageHeader
        title="Breadcrumbs"
        category="ナビゲーション"
        description="現在地を示すパンくずリストです。Breadcrumbs の中に BreadcrumbItem を並べ、href を指定するとリンクになります。"
      />

      <Section title="基本的な使い方">
        <Breadcrumbs>
          <BreadcrumbItem href="#">ホーム</BreadcrumbItem>
          <BreadcrumbItem href="#">ドキュメント</BreadcrumbItem>
          <BreadcrumbItem>コンポーネント</BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section title="アイコン付き">
        <Breadcrumbs>
          <BreadcrumbItem href="#">
            <span className="flex items-center gap-1">🏠 ホーム</span>
          </BreadcrumbItem>
          <BreadcrumbItem href="#">
            <span className="flex items-center gap-1">📁 プロジェクト</span>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span className="flex items-center gap-1">📄 詳細</span>
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section title="長いパス">
        <Breadcrumbs>
          <BreadcrumbItem href="#">Top</BreadcrumbItem>
          <BreadcrumbItem href="#">Level 1</BreadcrumbItem>
          <BreadcrumbItem href="#">Level 2</BreadcrumbItem>
          <BreadcrumbItem href="#">Level 3</BreadcrumbItem>
          <BreadcrumbItem>Current</BreadcrumbItem>
        </Breadcrumbs>
      </Section>
    </div>
  );
}
