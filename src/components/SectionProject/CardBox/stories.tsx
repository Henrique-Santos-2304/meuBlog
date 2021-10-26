import { Story, Meta } from "@storybook/react";
import CardBox from ".";

export default {
  title: "CardBox",
  component: CardBox,
} as Meta;

export const Basic: Story = (args) => <CardBox {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <CardBox {...args} />;
