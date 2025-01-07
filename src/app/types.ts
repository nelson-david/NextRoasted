import { Dispatch, HTMLInputTypeAttribute, JSX, SetStateAction } from "react";

export type IconProps = {
    color?: string;
    size?: {
        width: string;
        height: string;
    };
};

export type StepProps = {
    title: string;
    icon: JSX.Element;
};

export type CustomButtonProps = {
    text: string;
    action: () => void;
    type: "submit" | "reset" | "button" | undefined;
    processing?: boolean;
    disabled?: boolean;
    style?: any;
    buttonColor?: string;
};

export type CustomInputFieldProps = {
    placeholder: string;
    value: string;
    onChange: any;
    type: HTMLInputTypeAttribute;
};

export interface ModalProps {
    isOpen: boolean;
    closeModal: any;
}
