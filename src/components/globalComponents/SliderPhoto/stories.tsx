import { Story, Meta } from "@storybook/react";
import SliderPhoto from ".";

export default {
  title: "SliderPhoto",
  component: SliderPhoto,
} as Meta;

export const Basic: Story = (args) => <SliderPhoto {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <SliderPhoto {...args} />;
