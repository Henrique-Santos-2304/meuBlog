import { Story, Meta } from "@storybook/react";
import ICon from ".";

export default {
  title: "ICon",
  component: ICon,
} as Meta;

export const Basic: Story = (args) => <ICon {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ICon {...args} />;
