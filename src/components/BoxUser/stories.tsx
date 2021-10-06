import { Story, Meta } from "@storybook/react";
import BoxUser from ".";

export default {
  title: "BoxUser",
  component: BoxUser,
} as Meta;

export const Basic: Story = (args) => <BoxUser {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <BoxUser {...args} />;
