import { Story, Meta } from "@storybook/react";
import ButtonToogleMenu from ".";
import { mockButtonTooglrMenu } from "./mockButtonToogleMenu";

export default {
  title: "ButtonToogleMenu",
  component: ButtonToogleMenu,
} as Meta;

export const Basic: Story = () => (
  <ButtonToogleMenu menuVisible={false} {...mockButtonTooglrMenu} />
);

export const Default: Story = () => (
  <ButtonToogleMenu menuVisible={false} {...mockButtonTooglrMenu} />
);
