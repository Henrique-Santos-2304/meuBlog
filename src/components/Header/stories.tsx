import { Story, Meta } from "@storybook/react";
import Header from ".";

export default {
  title: "Header",
  component: Header,
  args: {
    title: "title default",
    description: "description default",
  },
} as Meta;

export const Basic: Story = (args) => <Header {...args} />;
Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Header {...args} />;
