import { Avatar } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const AvatarPage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Avatar"
        category="データ表示"
        description="ユーザーのアバターを表示するコンポーネントです。画像またはプレースホルダーテキストを表示でき、online / offline のステータスも示せます。"
      />

      <Section title="サイズ" description="size prop で xs / sm / md / lg / xl を指定します。">
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          size="xs"
          alt="avatar"
        />
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          size="sm"
          alt="avatar"
        />
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          size="md"
          alt="avatar"
        />
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          size="lg"
          alt="avatar"
        />
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          size="xl"
          alt="avatar"
        />
      </Section>

      <Section
        title="形状"
        description="shape prop で circle（デフォルト）または square を指定します。"
      >
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          shape="circle"
          alt="circle"
        />
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          shape="square"
          alt="square"
        />
      </Section>

      <Section title="オンラインステータス">
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          online
          alt="online"
        />
        <Avatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          offline
          alt="offline"
        />
      </Section>

      <Section
        title="プレースホルダー"
        description="src を省略し placeholder prop を使うとイニシャルなどを表示できます。"
      >
        <Avatar placeholder size="md">
          <span className="text-xl">ZU</span>
        </Avatar>
        <Avatar placeholder size="md">
          <span className="text-xl">AI</span>
        </Avatar>
      </Section>
    </div>
  </CommonLayout>
);

export default AvatarPage;
