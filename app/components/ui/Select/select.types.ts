export type SelectValue = string | number;

export interface SelectOption {
    label: string;
    value: SelectValue;
}

export interface SelectProps {
    defaultValue?: string;
    options: SelectOption[];
    modelValue?: SelectValue | null;
    isAddNew?: boolean;
    onAddNew?: () => void;
    isLink?: boolean;
    href?: string;
}
