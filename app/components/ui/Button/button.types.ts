export interface ButtonProps {
    elementType?: "link" | "button";
    type?: "primary" | "accent";
    href?: string;
    disabled?: boolean;
    click?: () => void;
}