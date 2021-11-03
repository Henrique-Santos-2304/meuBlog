import { Story, Meta } from "@storybook/react";
import IconsContact from ".";
import { mockFooter } from "../mockFooter";

export default {
  title: "IconsContact",
  component: IconsContact,
} as Meta;

export const Basic: Story = () => <IconsContact {...mockFooter.dataFooter} />;

export const Default: Story = () => <IconsContact {...mockFooter.dataFooter} />;
