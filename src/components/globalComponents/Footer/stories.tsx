import { Story, Meta } from "@storybook/react";
import GoToTop from ".";

export default {
  title: "GoToTop",
  component: GoToTop,
} as Meta;

export const Basic: Story = (args) => <GoToTop {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <GoToTop {...args} />;
