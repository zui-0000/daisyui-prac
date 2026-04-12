import { Button, Input, Join, JoinItem, Select } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const JoinPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Join"
        category="レイアウト"
        description="複数の要素を隙間なく結合するグループコンテナです。JoinItem でラップした子要素が接続して表示されます。"
      />

      <Section title="ボタングループ" description="join-item クラスが境界を共有します。">
        <Join>
          <JoinItem>
            <Button>左</Button>
          </JoinItem>
          <JoinItem>
            <Button>中</Button>
          </JoinItem>
          <JoinItem>
            <Button>右</Button>
          </JoinItem>
        </Join>
        <Join>
          <JoinItem>
            <Button color="primary">A</Button>
          </JoinItem>
          <JoinItem>
            <Button color="primary" variant="outline">
              B
            </Button>
          </JoinItem>
          <JoinItem>
            <Button color="primary">C</Button>
          </JoinItem>
        </Join>
      </Section>

      <Section title="入力 + ボタン" description="検索バーのようなUIに使います。">
        <Join>
          <JoinItem>
            <Input bordered placeholder="検索..." className="w-48" />
          </JoinItem>
          <JoinItem>
            <Button color="primary">検索</Button>
          </JoinItem>
        </Join>
      </Section>

      <Section title="セレクト + 入力" row={false}>
        <Join>
          <JoinItem>
            <Select>
              <option>名前</option>
              <option>メール</option>
            </Select>
          </JoinItem>
          <JoinItem>
            <Input bordered placeholder="検索..." className="w-52" />
          </JoinItem>
          <JoinItem>
            <Button color="primary">実行</Button>
          </JoinItem>
        </Join>
      </Section>

      <Section title="縦並び" description="vertical prop で縦方向に結合します。">
        <Join vertical>
          <JoinItem>
            <Button className="w-32">上</Button>
          </JoinItem>
          <JoinItem>
            <Button className="w-32">中</Button>
          </JoinItem>
          <JoinItem>
            <Button className="w-32">下</Button>
          </JoinItem>
        </Join>
      </Section>
    </div>
  </CommonLayout>
);

export default JoinPage;
