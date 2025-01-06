import DocumentIcon from "../icons/DocumentIcon";
import UploadIcon from "../icons/UploadIcon";
import WalletIcon from "../icons/WalletIcon";
import { StepProps } from "../types";

const steps: StepProps[] = [
    {
        title: "Submit your website",
        icon: <UploadIcon size={{ width: "32", height: "32" }} />,
    },
    {
        title: "Make a secure payment",
        icon: <WalletIcon size={{ width: "32", height: "32" }} />,
    },
    {
        title: "Get figma file in 1-2 days",
        icon: <DocumentIcon size={{ width: "32", height: "32" }} />,
    },
];

export { steps };
