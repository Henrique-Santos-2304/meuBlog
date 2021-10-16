import { Story, Meta } from "@storybook/react";
import Skilss from ".";

export default {
  title: "Skilss",
  component: Skilss,
} as Meta;

export const Basic: Story = (args) => <Skilss {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Skilss {...args} />;
