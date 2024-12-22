/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import useScroll from "@/app/hooks/useScroll";

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  transition: backdrop-filter 50ms ease-in-out;
  border-bottom: none;
`;

const headerInStyle = css`
  width: 100%;
  max-width: 1048px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const navStyle = css`
  display: inline-flex;
  gap: 32px;
  height: 100%;
  margin-right: 30px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98%;

    a {
      padding: 12px 10px;
      font-size: 14px;
      color: #fff;
      border-radius: 8px;
      border: 0;
      cursor: pointer;
      background-color: transparent;
      text-decoration: none;
      text-align: left;

      &:hover {
        background: rgba(217, 217, 255, 0.15);
      }
    }
  }
`;

const activeHeader = css`
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
}
`;

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
  return (
    <>
      <header css={scroll > 1 ? [headerStyle, activeHeader] : headerStyle}>
        <div className="in_header" css={headerInStyle}>
          <Link href="/">
            <Image
              width={65}
              height={20}
              src={"/images/logo.svg"}
              alt="로고"
              style={{ marginLeft: 6.8 }}
            />
          </Link>
          <ul className="header_ul" css={navStyle}>
            {navInfo.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
