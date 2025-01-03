/** @jsxImportSource @emotion/react */
"use client";
import Link from "next/link";
import useScroll from "@/app/hooks/useScroll";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";
import {
  activeHeader,
  headerInStyle,
  headerStyle,
  mobileMenu,
  navStyle,
} from "./HeaderStyle";

const navInfo = [
  {
    title: "회사 소개",
    href: "/",
  },
  {
    title: "공지사항",
    href: "/",
  },
  {
    title: "고객센터",
    href: "/",
  },
  {
    title: "자주 묻는 질문",
    href: "/",
  },
  {
    title: "공동인증서 관리",
    href: "/",
  },
  {
    title: "채용",
    href: "/",
  },
];

const Header = () => {
  const scroll = useScroll().scroll;
  const isMobile = useMediaQuery("(max-width: 760px)");
  const [navToggle, setToggle] = useState(false);

  return (
    <>
      <header
        css={scroll > 1 ? [headerStyle, activeHeader] : headerStyle}
        className={navToggle ? "isMobile" : ""}
      >
        <div className="in_header" css={headerInStyle}>
          <Link href="/" className="logo" rel="preload">
            <Image
              width={100}
              height={50}
              src={"/images/Toss_Logo.webp"}
              alt="로고"
              priority
            />
          </Link>
          {isMobile && (
            <button css={mobileMenu} onClick={() => setToggle(!navToggle)}>
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          )}

          <nav css={navStyle}>
            <ul className="header_ul">
              {navInfo.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
