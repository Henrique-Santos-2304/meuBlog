import { Story, Meta } from "@storybook/react";
import FormEmail from ".";
import { mockMainContact } from "../MainContact/mockMainContact";

export default {
  title: "FormEmail",
  component: FormEmail,
} as Meta;

export const Basic: Story = () => <FormEmail {...mockMainContact} />;

export const Default: Story = () => <FormEmail {...mockMainContact} />;
