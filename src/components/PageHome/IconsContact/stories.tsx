import { Story, Meta } from "@storybook/react";
import IconsContact from ".";

export default {
  title: "IconsContact",
  component: IconsContact,
} as Meta;

export const Basic: Story = (args) => <IconsContact {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <IconsContact {...args} />;
