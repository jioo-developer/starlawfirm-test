import React from "react";
import GridBox from "./GridBox";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/GridBox",
  component: GridBox,
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

type argsType = {
  width: number | string;
  height: number;
  index: number;
  items: {
    title: string;
    introduce: string;
    hiddenText: string;
  };
};

const Template: StoryFn<argsType> = (args) => <GridBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: "300px",
  height: 400,
  index: 0,
  items: {
    title: "Example Title",
    introduce: "This is an introduction text for the GridBox component.",
    hiddenText: "This is hidden text revealed on toggle.",
  },
};
