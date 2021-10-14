import { Story, Meta } from "@storybook/react";
import FormEmail from ".";

export default {
  title: "FormEmail",
  component: FormEmail,
} as Meta;

export const Basic: Story = (args) => <FormEmail {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <FormEmail {...args} />;
