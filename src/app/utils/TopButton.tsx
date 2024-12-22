/** @jsxImportSource @emotion/react */
"useclient";
import { css } from "@emotion/react";
import { useScrollStore } from "../store/common";

const style = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: #0056b3;
  }

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-left: 3px solid white;
    border-top: 3px solid white;
    transform: rotate(-315deg);
    margin-bottom: -3px;
    margin-right: -0.5px;
  }
`;

const TopButton = () => {
  const scroll = useScrollStore().scroll;
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };
  return (
    <>
      {scroll > 300 && (
        <button css={style} onClick={() => scrollTopHandler()}></button>
      )}
    </>
  );
};
export default TopButton;
