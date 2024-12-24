/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./Header"; // Header 컴포넌트의 경로에 맞게 수정하세요.
import "@/app/globals.css";

export default {
  title: "Components/Header", // Storybook에서 나타날 그룹/이름
  component: Header,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
};

const style = css`
  position: fixed;
  background: #333;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const Default = {
  render: () => {
    return (
      <div css={style}>
        <Header />
      </div>
    );
  },
  args: {}, // Header 컴포넌트에 전달할 기본 속성을 설정할 수 있습니다.
};
