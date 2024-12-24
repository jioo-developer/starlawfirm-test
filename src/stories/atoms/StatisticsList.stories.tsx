import React from "react";
import StatisticsList from "./StatisticsList";
import { statistList } from "@/app/pages/components/Introduce";

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
  args: {
    list: statistList,
    width: 400,
    wrap: true,
    direction: "row",
  },
};

export const Default = {
  render: (args: {
    list: { label: string; value: string }[];
    width: string | number;
    wrap: boolean;
    direction: "row" | "column";
  }) => (
    <div
      style={{
        background: "rgb(189 189 189 / 43%)",
        width: "100%",
        height: 400,
        padding: 20,
      }}
    >
      <StatisticsList {...args} />
    </div>
  ),
};
