/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Link from "next/link";
import useScroll from "@/app/hooks/useScroll";
import useMediaQuery from "@/app/hooks/jseMediaQuery";
import Image from "next/image";
import { useState } from "react";

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  transition: backdrop-filter 50ms ease-in-out;
  border-bottom: none;

  @media all and (max-width: 760px) {
    max-width: 100vw;

    &.isMobile {
      height: auto;
      background: #191f28;
    }
  }
`;

const headerInStyle = css`
  width: 100%;
  max-width: 1048px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media all and (max-width: 1200px) {
    width: 95%;
  }

  @media all and (max-width: 760px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    position: relative; /* 오타 수정 */
    max-width: 100vw;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 60px;

    img {
      margin-left: 6.8px;
      transform: scale(1.3);
    }
  }
`;

const navStyle = css`
  height: 100%;

  ul {
    display: inline-flex;
    gap: 32px;
    height: 100%;
    margin-right: 30px;

    @media all and (max-width: 1200px) {
      margin-right: 0;
      gap: 16px;
    }

    @media all and (max-width: 760px) {
      flex-direction: column;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease-in-out;

      &.isMobile {
        max-height: 420px;
      }
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98%;

    @media all and (max-width: 760px) {
      width: 100%;
      height: auto;
      justify-content: flex-start;
    }

    &:last-child {
      padding-bottom: 1em;
    }

    a {
      padding: 0.75em 0.625em;
      font-size: 0.875rem;
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

const mobileMenu = css`
  display: none;
  position: absolute;
  top: 18.5px;
  right: 7px;
  display: flex;
  cursor: pointer;

  @media all and (max-width: 760px) {
    display: block;
  }

  .menu-icon {
    width: 37px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: scale(0.8);
  }

  .menu-icon span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 3px;
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
              quality={1}
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
            <ul className={navToggle ? "header_ul isMobile" : "header_ul"}>
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
