import { Story, Meta } from "@storybook/react";
import ButtonMenu from ".";

export default {
  title: "ButtonMenu",
  component: ButtonMenu,
} as Meta;

export const Basic: Story = (args) => <ButtonMenu {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ButtonMenu {...args} />;
