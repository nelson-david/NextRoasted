import { IconProps } from "@/app/types";

const CancelIcon = ({ color, size }: IconProps) => {
    return (
        <>
            <svg
                width={size ? size.width : "18"}
                height={size ? size.height : "18"}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
                stroke={color ? color : "#ffffff"}
                fill="none"
            >
                <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
                <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
            </svg>
        </>
    );
};

export default CancelIcon;
