import React from "react";
import HistoryMap from "../vertical/HistoryMap";

export default {
  title: "Components/HistoryMap",
  component: HistoryMap,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <div style={{ padding: "70px 70px 70px 150px", background: "#d9d9d9" }}>
      <HistoryMap />
    </div>
  ),
};
