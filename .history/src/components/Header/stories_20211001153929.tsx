import { Story, Meta } from "@storybook/react";
import Home from ".";

export default {
  title: "Home",
  component: Home,
  args: {
    title: "title default",
    description: "description default",
  },
} as Meta;

export const Basic: Story = (args) => <Home {...args} />;
Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Home {...args} />;
