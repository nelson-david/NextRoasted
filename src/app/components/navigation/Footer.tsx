import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>© 2025 roasted. All rights reserved</li>
                <li>roasted.</li>
                <li>
                    <Link href="/">X</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Email</Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
