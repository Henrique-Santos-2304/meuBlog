import { Story, Meta } from "@storybook/react";
import ModalForm from ".";

export default {
  title: "ModalForm",
  component: ModalForm,
} as Meta;

export const Basic: Story = (args) => <ModalForm {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ModalForm {...args} />;
