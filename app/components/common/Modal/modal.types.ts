export interface ModalProps {
    isOpen: boolean;
    canClose?: boolean;
    close?: () => void;
}