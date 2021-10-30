import { Story, Meta } from "@storybook/react";
import ButtonToogleMenu from ".";

export default {
  title: "ButtonToogleMenu",
  component: ButtonToogleMenu,
} as Meta;

export const Basic: Story = (args) => <ButtonToogleMenu {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ButtonToogleMenu {...args} />;
