import { Story, Meta } from "@storybook/react";
import MainContact from ".";

export default {
  title: "MainContact",
  component: MainContact,
} as Meta;

export const Basic: Story = (args) => <MainContact {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <MainContact {...args} />;
