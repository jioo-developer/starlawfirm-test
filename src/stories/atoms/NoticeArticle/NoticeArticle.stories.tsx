import React from "react";
import NoticeArticle from "./NoticeArticle";
import "@/app/globals.css";

export default {
  title: "Components/NoticeArticle",
  component: NoticeArticle,
  tags: ["autodocs"],
  argTypes: {
    handler: { action: "handled" },
  },
  args: {
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
  },
};

export const Default = {
  render: (args: {
    width: number;
    height: number;
    radius?: number;
    active: number;
    index: number;
    items: {
      type: string;
      title: string;
      date: string;
    };
    handler: (object: { topvalue: number; heightvalue: number }) => void;
  }) => (
    <div
      style={{
        background: "rgb(189 189 189 / 43%)",
        width: 300,
        height: 400,
        padding: 20,
      }}
    >
      <NoticeArticle {...args} />
    </div>
  ),
};
