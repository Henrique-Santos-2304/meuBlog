import { Story, Meta } from "@storybook/react";
import SectionClipPathEffect from ".";

export default {
  title: "SectionClipPathEffect",
  component: SectionClipPathEffect,
} as Meta;

export const Basic: Story = () => (
  <SectionClipPathEffect>
    <p>Section Clip Path</p>
  </SectionClipPathEffect>
);

export const Default: Story = () => (
  <SectionClipPathEffect>
    <p>Section Clip Path</p>
  </SectionClipPathEffect>
);
