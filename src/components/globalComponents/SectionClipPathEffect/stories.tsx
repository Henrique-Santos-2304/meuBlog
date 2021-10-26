import { Story, Meta } from "@storybook/react";
import SectionClipPathEffect from ".";

export default {
  title: "SectionClipPathEffect",
  component: SectionClipPathEffect,
} as Meta;

export const Basic: Story = (args) => <SectionClipPathEffect {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <SectionClipPathEffect {...args} />;
