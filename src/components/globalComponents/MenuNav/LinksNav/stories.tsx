import { Story, Meta } from "@storybook/react";
import LinkNav from ".";
import { mocknavLinks } from "./mockNaviLinks";

export default {
  title: "LinkNav",
  component: LinkNav,
} as Meta;

export const Basic: Story = () => <LinkNav {...mocknavLinks} />;

export const Default: Story = () => <LinkNav {...mocknavLinks} />;
