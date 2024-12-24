import React from "react";
import RowNoticeArticle from "./RowArticle";
import "@/app/globals.css";

export default {
  title: "Components/RowNoticeArticle",
  component: RowNoticeArticle,
  tags: ["autodocs"],
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
  args: {
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
  },
};

export const Default = {
  render: (args: {
    width: number;
    height: number;
    radius?: number;
    page: number;
    index: number;
    items: {
      type: string;
      title: string;
      subTitle: string;
      date: string;
    };
  }) => <RowNoticeArticle {...args} />,
};
