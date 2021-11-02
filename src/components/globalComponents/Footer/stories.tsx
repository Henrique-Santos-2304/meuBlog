import { Story, Meta } from "@storybook/react";
import Footer from ".";

export default {
  title: "Footer",
  component: Footer,
} as Meta;

export const Basic: Story = (args) => <Footer {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Footer {...args} />;
