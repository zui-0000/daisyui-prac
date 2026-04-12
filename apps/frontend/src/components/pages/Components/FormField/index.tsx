import { Button, Checkbox, FormField, Input, Select, Textarea } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function FormFieldPage() {
  return (
    <div>
      <PageHeader
        title="FormField"
        category="データ入力"
        description="ラベル・ヒント・エラーメッセージをまとめたフォームフィールドコンテナです。htmlFor prop で input と label を紐付けます。"
      />

      <Section title="基本的な使い方" row={false}>
        <div className="w-full max-w-sm">
          <FormField label="メールアドレス" htmlFor="email">
            <Input id="email" type="email" placeholder="you@example.com" bordered />
          </FormField>
        </div>
      </Section>

      <Section title="必須・ヒント付き" row={false}>
        <div className="w-full max-w-sm">
          <FormField
            label="ユーザー名"
            htmlFor="username"
            required
            hint="3〜20文字で入力してください"
          >
            <Input id="username" placeholder="username" bordered />
          </FormField>
        </div>
      </Section>

      <Section
        title="エラー表示"
        description="error prop を渡すとエラーメッセージが赤字で表示されます。"
        row={false}
      >
        <div className="w-full max-w-sm">
          <FormField
            label="パスワード"
            htmlFor="password"
            error="パスワードは8文字以上にしてください"
          >
            <Input id="password" type="password" color="error" bordered placeholder="password" />
          </FormField>
        </div>
      </Section>

      <Section
        title="labelAlt付き"
        description="labelAlt prop でラベルの右側に補足テキストを表示します。"
        row={false}
      >
        <div className="w-full max-w-sm">
          <FormField label="自己紹介" htmlFor="bio" labelAlt="任意">
            <Textarea id="bio" placeholder="自己紹介を入力..." bordered />
          </FormField>
        </div>
      </Section>

      <Section title="フォーム例" row={false}>
        <form className="w-full max-w-sm space-y-4">
          <FormField label="名前" htmlFor="name" required>
            <Input id="name" placeholder="山田 太郎" bordered />
          </FormField>
          <FormField label="役割" htmlFor="role">
            <Select id="role">
              <option>開発者</option>
              <option>デザイナー</option>
              <option>マネージャー</option>
            </Select>
          </FormField>
          <FormField label="通知を受け取る" htmlFor="notify">
            <div className="flex items-center gap-2">
              <Checkbox id="notify" color="primary" />
              <span className="text-sm">メールで通知を受け取る</span>
            </div>
          </FormField>
          <Button color="primary" type="submit" block>
            送信
          </Button>
        </form>
      </Section>
    </div>
  );
}
