import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SlidersIcon } from "./SlidersIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Icon",
  component: SlidersIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    stroke: { control: "color" },
    strokeWidth: { control: "number" },
    height: { control: "number" },
    width: { control: "number" },
  },
} as ComponentMeta<typeof SlidersIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SlidersIcon> = (args) => (
  <SlidersIcon {...args} />
);

export const Sliders = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sliders.args = {};
