/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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

const Style = css`
  width: 300px;
  height: 400px;
  padding: 20px;
  box-sizing: border-box;
  background: #f4f4f4;

  article {
    width: 100% !important;
  }

  figure {
    opacity: 1 !important;
    width: 100% !important;
  }

  p,
  span {
    color: #888 !important;
  }
`;

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
    <div className="test" css={Style}>
      <NoticeArticle {...args} />
    </div>
  ),
};
