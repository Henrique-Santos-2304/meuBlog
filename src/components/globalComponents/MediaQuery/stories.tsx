import { Story, Meta } from "@storybook/react";
import HandleMediaQuery from ".";

export default {
  title: "MediaQuery",
  component: HandleMediaQuery,
} as Meta;

export const Basic: Story = () => (
  <HandleMediaQuery responsive="max-width" asWidth="767px" show>
    <p>Media Query</p>
  </HandleMediaQuery>
);

export const Default: Story = () => (
  <HandleMediaQuery responsive="max-width" asWidth="767px" show>
    <p>Media Query</p>
  </HandleMediaQuery>
);
