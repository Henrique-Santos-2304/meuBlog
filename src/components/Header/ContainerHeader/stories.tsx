import { Story, Meta } from "@storybook/react";
import ContainerHeader from ".";

export default {
  title: "ContainerHeader",
  component: ContainerHeader,
} as Meta;

export const Basic: Story = (args) => <ContainerHeader {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ContainerHeader {...args} />;
