import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import SessionProvider from "@/context/next-auth-provider";
import { ReactNode } from "react";
import NavBar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import authGuard from "@/utils/auth-guard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | TuneTracer",
        default: "Home | TuneTracer",
    },
    description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
    const session = await authGuard();
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                <SessionProvider session={session}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <NavBar session={session} />
                        <main className="container px-0 sm:px-4">{children}</main>
                        <Toaster />
                    </ThemeProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
