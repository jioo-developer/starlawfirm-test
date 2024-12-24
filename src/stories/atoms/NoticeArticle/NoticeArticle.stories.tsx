import React from "react";
import { StoryFn } from "@storybook/react";
import NoticeArticle from "./NoticeArticle";

export default {
  title: "Components/NoticeArticle",
  component: NoticeArticle,
  argTypes: {
    handler: { action: "handled" },
  },
};

type ArgsType = {
  width: number; // 컴포넌트의 너비
  height: number; // 컴포넌트의 높이
  radius?: number; // 선택적, 모서리 반경
  active: number; // 활성화된 상태 (1, 2 등)
  index: number; // 현재 인덱스
  items: {
    type: string; // 항목의 유형
    title: string; // 항목의 제목
    date: string; // 항목의 날짜 (YYYY-MM-DD 형식)
  };
  handler: (object: { topvalue: number; heightvalue: number }) => void; // 이벤트 핸들러
};

const Template: StoryFn<ArgsType> = (args) => <NoticeArticle {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: 300,
  height: 200,
  radius: 10,
  active: 1,
  index: 0,
  items: {
    type: "Notice",
    title: "Important Update",
    date: "2024-12-24",
  },
  handler: (object: { topvalue: number; heightvalue: number }) => {
    console.log("Handler called with:", object);
  },
};
