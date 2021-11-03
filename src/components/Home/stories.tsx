import { Story, Meta } from "@storybook/react";
import Main from ".";
import { mockHome } from "./mockHome";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "title default",
    description: "description default",
  },
} as Meta;

export const Basic: Story = () => <Main {...mockHome} />;

export const Default: Story = () => <Main {...mockHome} />;
