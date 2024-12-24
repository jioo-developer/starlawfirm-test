import React from "react";
import { StoryFn } from "@storybook/react";
import StatisticsList from "./StatisticsList";

export default {
  title: "Components/StatisticsList",
  component: StatisticsList,
  tags: ["autodocs"],
  argTypes: {
    list: {
      control: "object",
      description: "List of statistics with label and value",
    },
    width: {
      control: { type: "text" },
      description: "Width of each statistic item",
    },
    wrap: {
      control: { type: "boolean" },
      description: "Whether the items should wrap to the next line",
    },
    direction: {
      control: { type: "radio" },
      options: ["row", "column"],
      description: "Direction of the list",
    },
  },
};

type ArgsType = {
  list: { label: string; value: string }[];
  width: string | number;
  wrap: boolean;
  direction: "row" | "column";
};

const Template: StoryFn<ArgsType> = (args) => <StatisticsList {...args} />;

export const Default = Template.bind({});

Default.args = {
  list: [
    { label: "Users", value: "1,234" },
    { label: "Downloads", value: "567" },
    { label: "Reviews", value: "89" },
  ],
  width: "200px",
  wrap: true,
  direction: "row",
};
