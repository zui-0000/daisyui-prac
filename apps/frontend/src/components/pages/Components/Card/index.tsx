import { Badge, Button, Card, CardActions, CardBody, CardTitle } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const CardPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Card"
        category="データ表示"
        description="コンテンツをまとめるコンテナコンポーネントです。Card / CardBody / CardTitle / CardActions を組み合わせて使います。"
      />

      <Section title="基本的な使い方">
        <Card className="w-72 bg-base-100 shadow-md">
          <CardBody>
            <CardTitle>カードタイトル</CardTitle>
            <p className="text-sm text-base-content/70">
              カードの本文テキストです。画像やリストなど様々なコンテンツを配置できます。
            </p>
            <CardActions>
              <Button color="primary" size="sm">
                アクション
              </Button>
            </CardActions>
          </CardBody>
        </Card>
      </Section>

      <Section title="コンパクト">
        <Card compact bordered className="w-64">
          <CardBody>
            <CardTitle>Compact Card</CardTitle>
            <p className="text-xs text-base-content/60">padding が小さいバージョンです。</p>
            <CardActions>
              <Button color="ghost" size="xs">
                詳細
              </Button>
            </CardActions>
          </CardBody>
        </Card>
      </Section>

      <Section title="バッジ付き">
        <Card className="w-72 bg-base-100 shadow-md">
          <CardBody>
            <div className="flex items-start justify-between">
              <CardTitle>プロジェクト名</CardTitle>
              <Badge color="success" size="sm">
                進行中
              </Badge>
            </div>
            <p className="text-sm text-base-content/70">プロジェクトの説明文がここに入ります。</p>
            <CardActions justify="start">
              <Button color="primary" size="sm" variant="outline">
                編集
              </Button>
              <Button color="error" size="sm" variant="soft">
                削除
              </Button>
            </CardActions>
          </CardBody>
        </Card>
      </Section>
    </div>
  </CommonLayout>
);

export default CardPage;
