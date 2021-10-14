import { Story, Meta } from "@storybook/react";
import BoxMain from ".";

export default {
  title: "BoxMain",
  component: BoxMain,
} as Meta;

export const Basic: Story = (args) => <BoxMain {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <BoxMain {...args} />;
