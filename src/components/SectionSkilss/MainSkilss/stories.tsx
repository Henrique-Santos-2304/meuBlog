import { Story, Meta } from "@storybook/react";
import SectionSkilss from ".";
import { mockSkilss } from "./mockSkilss";

export default {
  title: "SectionSkilss",
  component: SectionSkilss,
} as Meta;

export const Basic: Story = () => <SectionSkilss {...mockSkilss} />;

export const Default: Story = () => <SectionSkilss {...mockSkilss} />;
