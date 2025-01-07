import { CustomInputFieldProps } from "@/app/types";
import styles from "@/app/styles/input.module.scss";

const CustomInputField = ({
    placeholder,
    value,
    onChange,
    type,
}: CustomInputFieldProps) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={type}
            className={styles.customInput}
        />
    );
};

export default CustomInputField;
