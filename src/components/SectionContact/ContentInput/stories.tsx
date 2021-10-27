import { Story, Meta } from "@storybook/react";
import ContentInput from ".";

export default {
  title: "ContentInput",
  component: ContentInput,
} as Meta;

export const Basic: Story = (args) => <ContentInput {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ContentInput {...args} />;
