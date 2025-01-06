import Link from "next/link";
import styles from "@/app/styles/footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContentWrapper}>
                <div className={styles.start}></div>
                <div className={styles.center}>
                    <ul>
                        <li>© 2025 roasted. All rights reserved</li>
                        <li>roasted.</li>
                        <li>
                            <Link href="/">X</Link>
                            <Link href="/">Instagram</Link>
                            <Link href="/">Email</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.end}></div>
            </div>
            <div className={styles.footerContentWrapper}>
                <div className={styles.start}></div>
                <div className={styles.center}></div>
                <div className={styles.end}></div>
            </div>
        </footer>
    );
};

export default Footer;
