import { Story, Meta } from "@storybook/react";
import Slides from ".";

export default {
  title: "Slides",
  component: Slides,
} as Meta;

export const Basic: Story = (args) => <Slides {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Slides {...args} />;
