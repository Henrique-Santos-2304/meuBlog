import { Story, Meta } from "@storybook/react";
import CarBox from ".";

export default {
  title: "CarBox",
  component: CarBox,
} as Meta;
const props = {
  url: "string",
  title: "string",
  subDescription: "string",
};
export const Basic: Story = (args) => <CarBox {...args} {...props} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <CarBox {...args} {...props} />;
