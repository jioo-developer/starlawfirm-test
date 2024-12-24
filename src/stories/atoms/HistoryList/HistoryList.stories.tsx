import React from "react";
import { StoryFn } from "@storybook/react";
import HistoryList from "./HistoryList";
import { historyDataType } from "./historyData";

export default {
  title: "Components/HistoryList",
  component: HistoryList,
  tags: ["autodocs"],
  argTypes: {
    selectYear: { action: "clicked" },
  },
};

type PropsType = {
  yearState: historyDataType;
  selectYear: (year: number) => void;
};

const Template: StoryFn<PropsType> = (args) => <HistoryList {...args} />;

export const Default = Template.bind({});

Default.args = {
  yearState: [
    { year: 2024, history: [{ date: "2024-01-01", text: "New Year's Day" }] },
  ],
  selectYear: (year: number) => {
    console.log(`Year selected: ${year}`);
  },
};
