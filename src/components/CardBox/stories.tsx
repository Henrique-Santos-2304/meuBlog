import { Story, Meta } from "@storybook/react";
import CarBox from ".";

export default {
  title: "CarBox",
  component: CarBox,
} as Meta;

export const Basic: Story = (args) => <CarBox {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <CarBox {...args} />;
