import { Story, Meta } from "@storybook/react";
import Loading from ".";

export default {
  title: "Loading",
  component: Loading,
} as Meta;

export const Basic: Story = (args) => <Loading {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Loading {...args} />;
