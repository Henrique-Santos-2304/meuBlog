import { Story, Meta } from "@storybook/react";
import BoxSkilss from ".";

export default {
  title: "BoxSkilss",
  component: BoxSkilss,
} as Meta;

export const Basic: Story = (args) => <BoxSkilss {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <BoxSkilss {...args} />;
