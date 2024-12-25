import React from "react";
import HistoryMap from "../vertical/HistoryMap";

export default {
  title: "Components/HistoryMap",
  component: HistoryMap,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <div
      style={{ padding: "70px 70px 70px 150px", background: "rgb(29,29,29)" }}
    >
      <HistoryMap />
    </div>
  ),
};
