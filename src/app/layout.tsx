import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { MSWComponent } from "./utils/MswRunner";
import { ReactNode } from "react";

export const metadata = {
  title: "토스 팀 소개",
  description: "토스 팀에 관한 홈페이지 입니다",
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

const NotoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
});

// 필요한 폰트만 불러와서 body에 적용

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={NotoSans.className}>
      <body>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
}
