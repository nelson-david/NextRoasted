import DocumentIcon from "../icons/DocumentIcon";
import UploadIcon from "../icons/UploadIcon";
import WalletIcon from "../icons/WalletIcon";
import { StepProps } from "../types";

const steps: StepProps[] = [
    {
        title: "Submit your website",
        icon: <UploadIcon size={{ width: "30", height: "30" }} />,
    },
    {
        title: "Make a secure payment",
        icon: <WalletIcon size={{ width: "30", height: "30" }} />,
    },
    {
        title: "Get figma file in 1-2 days",
        icon: <DocumentIcon size={{ width: "30", height: "30" }} />,
    },
];

export { steps };
