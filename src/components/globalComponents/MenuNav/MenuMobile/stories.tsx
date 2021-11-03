import { Story, Meta } from "@storybook/react";
import MenuNav from ".";
import { mockMenuNav } from "./mockMenuNav";

export default {
  title: "MenuNav",
  component: MenuNav,
} as Meta;

export const Basic: Story = () => <MenuNav {...mockMenuNav} />;

export const Default: Story = () => <MenuNav {...mockMenuNav} />;
