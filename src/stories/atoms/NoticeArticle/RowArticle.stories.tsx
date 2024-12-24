import React from "react";
import { StoryFn } from "@storybook/react";
import RowNoticeArticle from "./RowArticle";

export default {
  title: "Components/RowNoticeArticle",
  component: RowNoticeArticle,
  argTypes: {
    items: {
      control: "object",
      description: "The content data for the article",
    },
    width: {
      control: { type: "number" },
      description: "The width of the article image",
    },
    height: {
      control: { type: "number" },
      description: "The height of the article image",
    },
    radius: {
      control: { type: "number" },
      description: "The border radius of the article image",
    },
    page: {
      control: { type: "number" },
      description: "Page multiplier for the image index",
    },
    index: {
      control: { type: "number" },
      description: "Index of the current article",
    },
  },
};

type ArgsType = {
  width: number; // 컴포넌트의 너비
  height: number; // 컴포넌트의 높이
  radius?: number; // 선택적, 모서리 반경
  page: number; // 페이지 번호
  index: number; // 현재 인덱스
  items: {
    type: string; // 항목의 유형 (예: "Notice")
    title: string; // 항목의 제목
    subTitle: string; // 항목의 부제목
    date: string; // 항목의 날짜 (YYYY-MM-DD 형식)
  };
};

const Template: StoryFn<ArgsType> = (args) => <RowNoticeArticle {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: 300,
  height: 200,
  radius: 10,
  page: 1,
  index: 0,
  items: {
    type: "Notice",
    title: "Important Update",
    subTitle: "Subheading for the article",
    date: "2024-12-24",
  },
};
