import React from "react";
import { StoryFn } from "@storybook/react";
import HistoryMap from "./HistoryMap";

export default {
  title: "Components/HistoryMap",
  component: HistoryMap,
  tags: ["autodocs"],
};

const Template: StoryFn = () => <HistoryMap />;

export const Default = Template.bind({});

Default.args = {};
