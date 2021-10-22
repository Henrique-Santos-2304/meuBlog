import { Story, Meta } from "@storybook/react";
import Menu from ".";

const mockOpenClose = () => {
  return false;
};
export default {
  title: "Menu",
  component: Menu,
} as Meta;

export const Basic: Story = (args) => (
  <Menu {...args} isOpen onClose={mockOpenClose} />
);

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => (
  <Menu {...args} isOpen onClose={mockOpenClose} />
);
