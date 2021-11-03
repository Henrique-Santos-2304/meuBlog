import { Story, Meta } from "@storybook/react";
import Footer from ".";
import { mockFooter } from "./mockFooter";

export default {
  title: "Footer",
  component: Footer,
} as Meta;

export const Basic: Story = () => <Footer {...mockFooter} />;

export const Default: Story = () => <Footer {...mockFooter} />;
