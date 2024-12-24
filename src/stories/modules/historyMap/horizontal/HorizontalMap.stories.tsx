import React from "react";
import HorizontalMap from "./HorizontalMap";

export default {
  title: "Components/HorizontalMap",
  component: HorizontalMap,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1e1e1e" }],
    },
  },
};

export const Default = {
  render: () => (
    <div style={{ padding: "20px", background: "#000", height: "100vh" }}>
      <HorizontalMap />
    </div>
  ),
};
