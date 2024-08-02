import "./globals.css";

import type { Metadata } from "next";

import { Footer } from "~components/core/Footer/Footer";
import Navbar from "~components/core/Navbar";
import { cx } from "~styled-system/css";

import { inter, poppins } from "./fonts";

export const metadata: Metadata = {
    title: "API Courses - Treblle",
    description: "Treblle's API course is a comprehensive guide to building perfect APIs.",
};

type RootLayoutProperties = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProperties) {
    return (
        <html lang="en" className={cx(poppins.variable, inter.variable)}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
