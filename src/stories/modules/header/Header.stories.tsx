/** @jsxImportSource @emotion/react */
import Header from "./Header"; // Header 컴포넌트의 경로에 맞게 수정하세요.

export default {
  title: "Components/Header", // Storybook에서 나타날 그룹/이름
  component: Header,
  tags: ["autodocs"],

  parameters: {
    controls: { expanded: true },
  },
};

export const Default = {
  args: {},
};
