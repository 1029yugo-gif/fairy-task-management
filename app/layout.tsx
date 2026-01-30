import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "フェアリー タスク管理システム",
    description: "フェアリー（大宮）のタスク管理システム",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="ja">
                <body>{children}</body>
          </html>html>
        );
}</html>
