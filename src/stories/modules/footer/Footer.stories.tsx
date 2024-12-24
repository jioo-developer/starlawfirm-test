import React from "react";
import { StoryFn } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

const Template: StoryFn = () => <Footer />;

export const Default = Template.bind({});

Default.args = {};
