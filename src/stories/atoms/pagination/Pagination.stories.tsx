import React from "react";
import { StoryFn } from "@storybook/react";
import Pagination from "./Pagination";
import "@/app/globals.css";

export default {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    page: {
      control: { type: "number" },
      description: "Current active page",
    },
    handler: {
      action: "pageChanged",
      description: "Function to handle page changes",
    },
  },
};

type ArgsType = {
  page: number;
  handler: (page: number) => void;
};

const Template: StoryFn<ArgsType> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  page: 1,
  handler: (page: number) => {
    console.log(`Page changed to: ${page}`);
  },
};
