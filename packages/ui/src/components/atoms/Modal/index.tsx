import { cn } from "@ui/lib/utils";
import type { DialogHTMLAttributes, HTMLAttributes } from "react";

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open: boolean;
  onClose?: () => void;
}

interface ModalBoxProps extends HTMLAttributes<HTMLDivElement> {}
interface ModalActionProps extends HTMLAttributes<HTMLDivElement> {}

export function Modal({ open, onClose, className, children, ...props }: ModalProps) {
  return (
    <dialog className={cn("modal", open && "modal-open", className)} {...props}>
      {children}
      {onClose && (
        <button type="button" className="modal-backdrop" onClick={onClose} aria-label="閉じる" />
      )}
    </dialog>
  );
}

export function ModalBox({ className, ...props }: ModalBoxProps) {
  return <div className={cn("modal-box", className)} {...props} />;
}

export function ModalAction({ className, ...props }: ModalActionProps) {
  return <div className={cn("modal-action", className)} {...props} />;
}
