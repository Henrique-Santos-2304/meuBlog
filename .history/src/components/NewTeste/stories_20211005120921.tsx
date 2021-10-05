import { Story, Meta } from "@storybook/react";
import NewTeste from ".";

export default {
  title: "NewTeste",
  component: NewTeste,
} as Meta;

export const Basic: Story = (args) => <NewTeste {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <NewTeste {...args} />;
