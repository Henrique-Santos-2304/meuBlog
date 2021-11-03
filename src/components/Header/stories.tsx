import { Story, Meta } from "@storybook/react";
import Header from ".";
import { mockHeader } from "./mockHeader";

export default {
  title: "Header",
  component: Header,
} as Meta;

export const Basic: Story = () => <Header {...mockHeader} />;

export const Default: Story = () => <Header {...mockHeader} />;
