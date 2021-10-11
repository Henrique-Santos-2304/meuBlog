import { Story, Meta } from "@storybook/react";
import MenuLink from ".";

export default {
  title: "MenuLink",
  component: MenuLink,
} as Meta;

export const Basic: Story = (args) => <MenuLink {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <MenuLink {...args} />;
