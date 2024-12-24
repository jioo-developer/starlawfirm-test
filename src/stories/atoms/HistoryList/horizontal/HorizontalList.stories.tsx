import React from "react";
import HorizontalList from "./HorizontalList";
import { historyDataType } from "../vertical/historyData";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
  tags: ["autodocs"],
  args: {
    yearState: [
      { year: 2024, history: [{ date: "2024-01-01", text: "New Year's Day" }] },
    ],
    selectYear: (year: number) => {
      console.log(`Year selected: ${year}`);
    },
  },
};

export const Default = {
  render: (args: {
    yearState: historyDataType;
    selectYear: (year: number) => void;
  }) => (
    <div style={{ padding: "20px", background: "#000" }}>
      <HorizontalList {...args} />
    </div>
  ),
};
