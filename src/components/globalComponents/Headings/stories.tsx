import { Story, Meta } from "@storybook/react";
import Heading from ".";

export default {
  title: "Heading",
  component: Heading,
} as Meta;
const mock = {
  msg: "teste",
  colorText: "red",
  paddingText: "2rem",
  fontSizeText: "2.4rem",
  marginText: "1rem",
};
export const Basic: Story = () => <Heading {...mock} />;

export const Default: Story = () => <Heading {...mock} />;
