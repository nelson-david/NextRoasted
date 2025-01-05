import { JSX } from "react";

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
