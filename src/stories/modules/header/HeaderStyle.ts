import { css } from "@emotion/react";
export const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  max-height: 60px;
  transition: backdrop-filter 50ms ease-in-out;
  border-bottom: none;

  @media all and (max-width: 760px) {
    max-width: 100vw;
    overflow: hidden;
    transition:
      max-height 0.4s ease-in-out,
      backdrop-filter 50ms ease-in-out,
      background-color 0.5s cubic-bezier(0.4, 0, 1, 1);
    &.isMobile {
      max-height: 420px;
      background: #191f28;
    }
  }
`;

export const headerInStyle = css`
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
    position: relative;
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
      transform: scale(1.2);
    }
  }
`;

export const navStyle = css`
  height: 100%;

  ul {
    display: inline-flex;
    gap: 32px;
    height: 100%;
    margin-right: 30px;
    align-items: center;

    @media all and (max-width: 1200px) {
      margin-right: 0;
      gap: 16px;
    }

    @media all and (max-width: 760px) {
      flex-direction: column;
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 760px) {
      width: 100%;
      justify-content: flex-start;
      &:last-child {
        padding-bottom: 1em;
      }
    }

    a {
      padding: 0.858em 0.625em;
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

export const mobileMenu = css`
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

export const activeHeader = css`
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
}
`;
