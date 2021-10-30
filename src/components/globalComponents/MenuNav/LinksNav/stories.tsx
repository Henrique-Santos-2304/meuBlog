import { Story, Meta } from "@storybook/react";
import LinkNav from ".";

export default {
  title: "LinkNav",
  component: LinkNav,
} as Meta;

export const Basic: Story = (args) => <LinkNav {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <LinkNav {...args} />;
