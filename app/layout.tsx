import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
