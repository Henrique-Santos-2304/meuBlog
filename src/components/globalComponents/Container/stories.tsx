import { Story, Meta } from "@storybook/react";
import Container from ".";

export default {
  title: "Container",
  component: Container,
} as Meta;

export const Basic: Story = () => (
  <Container asHeight="small">
    <p>Teste</p>
  </Container>
);

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = () => (
  <Container asHeight="small">
    <p>Teste</p>
  </Container>
);
