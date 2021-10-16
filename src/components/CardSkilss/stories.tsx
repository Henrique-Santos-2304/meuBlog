import { Story, Meta } from "@storybook/react";
import CardSkilss from ".";

export default {
  title: "CardSkilss",
  component: CardSkilss,
} as Meta;

export const Basic: Story = (args) => <CardSkilss {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <CardSkilss {...args} />;
