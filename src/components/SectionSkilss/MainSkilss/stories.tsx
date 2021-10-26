import { Story, Meta } from "@storybook/react";
import SectionSkilss from ".";

export default {
  title: "SectionSkilss",
  component: SectionSkilss,
} as Meta;

export const Basic: Story = (args) => <SectionSkilss {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <SectionSkilss {...args} />;
