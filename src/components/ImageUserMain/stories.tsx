import { Story, Meta } from "@storybook/react";
import ImageUserMain from ".";

export default {
  title: "ImageUserMain",
  component: ImageUserMain,
} as Meta;

export const Basic: Story = (args) => <ImageUserMain {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ImageUserMain {...args} />;
