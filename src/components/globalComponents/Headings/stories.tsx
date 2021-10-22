import { Story, Meta } from "@storybook/react";
import Heading from ".";

export default {
  title: "Heading",
  component: Heading,
} as Meta;

export const Basic: Story = (args) => <Heading {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Heading {...args} />;
