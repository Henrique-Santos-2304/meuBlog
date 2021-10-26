import { Story, Meta } from "@storybook/react";
import AboutDescription from ".";

export default {
  title: "AboutDescription",
  component: AboutDescription,
} as Meta;

export const Basic: Story = (args) => <AboutDescription {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <AboutDescription {...args} />;
