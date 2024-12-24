import React from "react";
import HistoryList from "./HistoryList";
import { historyDataType } from "./historyData";
import "@/app/globals.css";

export default {
  title: "Components/HistoryList",
  component: HistoryList,
  tags: ["autodocs"],
  argTypes: {
    selectYear: { action: "clicked" },
  },
  args: {
    yearState: [
      { year: 2024, history: [{ date: "2024-01-01", text: "New Year's Day" }] },
    ],
  },
};

export const Default = {
  render: (args: {
    yearState: historyDataType;
    selectYear: (year: number) => void;
  }) => (
    <div style={{ padding: "70px 70px 70px 150px", background: "#d9d9d9" }}>
      <HistoryList {...args} />
    </div>
  ),
};
