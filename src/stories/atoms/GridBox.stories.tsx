import GridBox from "./GridBox";
import "@/app/globals.css";
import { officeList } from "@/app/pages/components/Corporation";

export default {
  title: "Components/GridBox",
  component: GridBox,
  tags: ["autodocs"],
  args: {
    width: 300,
    height: 600,
    index: 0,
    items: {
      title: officeList[0].title,
      introduce: officeList[0].introduce,
      hiddenText: officeList[0].hiddenText,
    },
  },
  argTypes: {
    width: {
      control: { type: "text" },
      description: "The width of the grid box",
    },
    height: {
      control: { type: "number" },
      description: "The height of the grid box",
    },
    items: {
      control: "object",
      description: "Content for the grid box",
    },
    index: {
      control: { type: "number" },
      description: "Index for the background image",
    },
  },
};

export const Story = {};
