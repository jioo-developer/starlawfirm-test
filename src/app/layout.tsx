import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { MSWComponent } from "./utils/MswRunner";

export const metadata: Metadata = {
  title: "토스 팀 소개",
  description: "토스 팀에 관한 홈페이지 입니다",
};

const NotoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={NotoSans.className}>
      <body>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
}
