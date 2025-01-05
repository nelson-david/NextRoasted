import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./grid.scss";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Roast my Hero Section - The Urban Studio",
    description: "Roasted by The Urban Studio",
};

export const viewport: Viewport = {
    themeColor: "#000000",
    initialScale: 1,
    width: "device-width",
    maximumScale: 1,
};

const inter = Inter({
    subsets: ["latin"], // Specify subsets you need
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
