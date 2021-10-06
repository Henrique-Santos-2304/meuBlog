import { Story, Meta } from "@storybook/react";
import MenuIcon from ".";

export default {
  title: "MenuIcon",
  component: MenuIcon,
} as Meta;

export const Basic: Story = (args) => <MenuIcon {...args} check={false} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
  color: "#111",
  background: "#111",
};

export const Default: Story = (args) => <MenuIcon {...args} check={false} />;
