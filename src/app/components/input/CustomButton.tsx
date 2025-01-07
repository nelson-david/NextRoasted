import { CustomButtonProps } from "@/app/types";
import { ImSpinner8 } from "react-icons/im";
import styles from "@/app/styles/input.module.scss";

const CustomButton = ({
    text,
    type,
    action,
    processing,
    disabled,
    style,
    buttonColor,
}: CustomButtonProps) => {
    return (
        <button
            onClick={action}
            type={type}
            style={style}
            disabled={disabled}
            className={styles.customButton}
            id={buttonColor === "yellow" ? styles.yellow : ""}
        >
            {processing ? <ImSpinner8 color="red" /> : text}
        </button>
    );
};

export default CustomButton;
