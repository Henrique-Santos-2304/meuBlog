import { Story, Meta } from "@storybook/react";
import ContentInput from ".";

export default {
  title: "ContentInput",
  component: ContentInput,
} as Meta;
const args = {
  error: "deu erro",
  typeLabel: "name",
  txtLabel: "Nome",
};
export const Basic: Story = () => (
  <ContentInput {...args}>
    <p>Sou Children</p>
  </ContentInput>
);

export const Default: Story = () => (
  <ContentInput {...args}>
    <p>Sou Children</p>
  </ContentInput>
);
