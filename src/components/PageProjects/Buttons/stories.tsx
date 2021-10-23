import { Story, Meta } from "@storybook/react";
import Buttons from ".";

export default {
  title: "Buttons",
  component: Buttons,
} as Meta;

export const Basic: Story = (args) => <Buttons {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Buttons {...args} />;
