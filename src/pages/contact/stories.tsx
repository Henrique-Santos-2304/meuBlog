import { Story, Meta } from "@storybook/react";
import SectionContact from ".";

export default {
  title: "SectionContact",
  component: SectionContact,
} as Meta;

export const Basic: Story = (args) => <SectionContact {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <SectionContact {...args} />;
