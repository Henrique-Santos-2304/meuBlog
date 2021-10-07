import { Story, Meta } from "@storybook/react";
import Header from ".";

export default {
  title: "Header",
  component: Header,
} as Meta;

export const Basic: Story = (args) => <Header {...args} check={false} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Header {...args} check={false} />;
