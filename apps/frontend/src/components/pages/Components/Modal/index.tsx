import { Button, Modal, ModalAction, ModalBox } from "@packages/ui";
import type { FC } from "react";
import { useState } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const ModalPage: FC = () => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <CommonLayout>
      <div>
        <PageHeader
          title="Modal"
          category="アクション"
          description="オーバーレイ表示のダイアログです。open prop で表示状態を制御し、onClose でバックドロップクリック時の挙動を指定します。"
        />

        <Section title="基本的な使い方" description="open state を useState で管理します。">
          <Button color="primary" onClick={() => setBasicOpen(true)}>
            モーダルを開く
          </Button>
          <Modal open={basicOpen} onClose={() => setBasicOpen(false)}>
            <ModalBox>
              <h3 className="text-lg font-bold">こんにちは！</h3>
              <p className="py-4 text-sm text-base-content/70">
                これは基本的なモーダルです。バックドロップをクリックするか、閉じるボタンで閉じます。
              </p>
              <ModalAction>
                <Button color="ghost" onClick={() => setBasicOpen(false)}>
                  閉じる
                </Button>
              </ModalAction>
            </ModalBox>
          </Modal>
        </Section>

        <Section title="確認ダイアログ" description="アクション確認に使うパターンです。">
          <Button color="error" variant="outline" onClick={() => setConfirmOpen(true)}>
            削除する
          </Button>
          <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)}>
            <ModalBox>
              <h3 className="text-lg font-bold">本当に削除しますか？</h3>
              <p className="py-4 text-sm text-base-content/70">
                この操作は取り消せません。削除してよろしいですか？
              </p>
              <ModalAction>
                <Button color="ghost" onClick={() => setConfirmOpen(false)}>
                  キャンセル
                </Button>
                <Button color="error" onClick={() => setConfirmOpen(false)}>
                  削除する
                </Button>
              </ModalAction>
            </ModalBox>
          </Modal>
        </Section>
      </div>
    </CommonLayout>
  );
};

export default ModalPage;
