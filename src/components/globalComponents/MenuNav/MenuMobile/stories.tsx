import { Story, Meta } from "@storybook/react";
import MenuNav from ".";

export default {
  title: "MenuNav",
  component: MenuNav,
} as Meta;

export const Basic: Story = (args) => <MenuNav {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <MenuNav {...args} />;
