import { Story, Meta } from "@storybook/react";
import MainContact from ".";
import { mockMainContact } from "./mockMainContact";

export default {
  title: "MainContact",
  component: MainContact,
} as Meta;

export const Basic: Story = () => <MainContact {...mockMainContact} />;

export const Default: Story = () => <MainContact {...mockMainContact} />;
