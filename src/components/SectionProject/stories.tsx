import { Story, Meta } from "@storybook/react";
import SectionProject from ".";

export default {
  title: "SectionProject",
  component: SectionProject,
} as Meta;

export const Basic: Story = (args) => <SectionProject {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <SectionProject {...args} />;
