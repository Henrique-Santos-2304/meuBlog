import { Story, Meta } from "@storybook/react";
import { mockBoxSkill } from "components/SectionSkilss/BoxSkilss/mockBoxSkilss";
import CardBox from ".";

export default {
  title: "CardBox",
  component: CardBox,
} as Meta;

export const Basic: Story = () => <CardBox {...mockBoxSkill} />;

export const Default: Story = () => <CardBox {...mockBoxSkill} />;
