/** @jsxImportSource @emotion/react */
"useclient";
import { useScrollStore } from "../store/common";
import { style } from "./TopButtonStyle";

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
