import { Button } from "../../primitives/Button";
import { Modal, ModalAction, ModalBox } from "../../primitives/Modal";

type ErrorDialogProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export function ErrorDialog({ isOpen, title, message, onClose }: ErrorDialogProps) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalBox>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="py-4 text-sm text-base-content/70">{message}</p>
        <ModalAction>
          <Button color="ghost" onClick={onClose}>
            閉じる
          </Button>
        </ModalAction>
      </ModalBox>
    </Modal>
  );
}
