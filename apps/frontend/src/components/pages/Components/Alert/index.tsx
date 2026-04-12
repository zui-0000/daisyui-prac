import { Alert } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 stroke-current"
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
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 stroke-current"
    role="img"
    aria-label="成功"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const WarnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 stroke-current"
    role="img"
    aria-label="警告"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 stroke-current"
    role="img"
    aria-label="エラー"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function AlertPage() {
  return (
    <div>
      <PageHeader
        title="Alert"
        category="フィードバック"
        description="情報・成功・警告・エラーなどのメッセージを伝えるアラートコンポーネントです。icon prop でアイコンを追加できます。"
      />

      <Section title="バリアント" row={false}>
        <Alert>デフォルトのアラートです。</Alert>
        <Alert variant="info" icon={<InfoIcon />}>
          新しいアップデートが利用可能です。
        </Alert>
        <Alert variant="success" icon={<CheckIcon />}>
          保存が完了しました！
        </Alert>
        <Alert variant="warning" icon={<WarnIcon />}>
          この操作は取り消せません。
        </Alert>
        <Alert variant="error" icon={<ErrorIcon />}>
          エラーが発生しました。もう一度お試しください。
        </Alert>
      </Section>

      <Section title="アイコンなし" row={false}>
        <Alert variant="info">情報メッセージ（アイコンなし）</Alert>
        <Alert variant="success">成功メッセージ（アイコンなし）</Alert>
      </Section>
    </div>
  );
}
