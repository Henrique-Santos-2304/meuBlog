import { Story, Meta } from "@storybook/react";
import SlideSkilss from ".";

export default {
  title: "SlideSkilss",
  component: SlideSkilss,
} as Meta;

export const Basic: Story = (args) => <SlideSkilss {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <SlideSkilss {...args} />;
