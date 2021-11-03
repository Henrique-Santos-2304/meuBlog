import { Story, Meta } from "@storybook/react";
import BoxSkilss from ".";
import { mockBoxSkill } from "./mockBoxSkilss";

export default {
  title: "BoxSkilss",
  component: BoxSkilss,
} as Meta;

export const Basic: Story = () => <BoxSkilss {...mockBoxSkill} />;

export const Default: Story = () => <BoxSkilss {...mockBoxSkill} />;
