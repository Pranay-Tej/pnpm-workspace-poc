import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { SlidersIcon } from "../icons/SlidersIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contained.args = {
  variant: "contained",
  children: "Button CTA",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  children: "Button CTA",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  variant: "outlined",
  children: "Button CTA",
  startIcon: <SlidersIcon />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  variant: "outlined",
  children: "Button CTA",
  endIcon: <SlidersIcon />,
};

export const BothIconsPrimary = Template.bind({});
BothIconsPrimary.args = {
  variant: "contained",
  children: "Button CTA",
  startIcon: <SlidersIcon stroke="var(--whiteColor)" />,
  endIcon: <SlidersIcon stroke="var(--whiteColor)" />,
};

export const BothIconsOutlined = Template.bind({});
BothIconsOutlined.args = {
  variant: "outlined",
  children: "Button CTA",
  startIcon: <SlidersIcon />,
  endIcon: <SlidersIcon />,
};
