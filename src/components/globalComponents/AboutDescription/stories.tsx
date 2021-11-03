import { Story, Meta } from "@storybook/react";
import AboutDescription from ".";

export default {
  title: "AboutDescription",
  component: AboutDescription,
} as Meta;
const mock = {
  title: "seção1",
  descriprions: "Descrição da seção",
};
export const Basic: Story = () => <AboutDescription {...mock} />;

export const Default: Story = () => <AboutDescription {...mock} />;
