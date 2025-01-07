import { ModalProps } from "@/app/types";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/app/styles/modal.module.scss";
import CancelIcon from "@/app/icons/CancelIcon";
import CustomButton from "../input/CustomButton";
import CustomInputField from "../input/CustomInputField";
import { useState } from "react";

const GetRoastedModal = ({ isOpen, closeModal }: ModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        websiteLink: "",
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.modalBackdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className={styles.customModal}
                    >
                        <div className={styles.modalHeader}>
                            <h3>Get a Free Roast</h3>

                            <button onClick={closeModal}>
                                <CancelIcon />
                            </button>
                        </div>
                        <div className={styles.modalContent}>
                            <div>
                                <form>
                                    <div className="inputGroup">
                                        <label>Name</label>
                                        <CustomInputField
                                            value={formData.name}
                                            onChange={(e: string) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e,
                                                })
                                            }
                                            placeholder="Nelson David"
                                            type="text"
                                        />
                                    </div>
                                    <div className="inputGroup">
                                        <label>Email</label>
                                        <CustomInputField
                                            value={formData.email}
                                            onChange={(e: string) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e,
                                                })
                                            }
                                            placeholder="david@theurban.studio"
                                            type="email"
                                        />
                                    </div>
                                    <div className="inputGroup">
                                        <label>Website Link</label>
                                        <CustomInputField
                                            value={formData.websiteLink}
                                            onChange={(e: string) =>
                                                setFormData({
                                                    ...formData,
                                                    websiteLink: e,
                                                })
                                            }
                                            placeholder="https://theurban.studio"
                                            type="text"
                                        />
                                    </div>

                                    <div style={{ padding: "5px 0px" }}>
                                        <CustomButton
                                            text="Roast me for Free"
                                            action={() => {}}
                                            type="submit"
                                        />
                                    </div>
                                </form>

                                <p className={styles.infoText}>
                                    We will only be able to provide the FREE
                                    roast if we are Available. To get a
                                    guaranteed roast, click below
                                </p>

                                <div>
                                    <CustomButton
                                        text="Guaranteed Roast at $45"
                                        type="button"
                                        action={() => {}}
                                        buttonColor="yellow"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GetRoastedModal;
