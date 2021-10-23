import { Story, Meta } from "@storybook/react";
import MediaQuery from ".";

export default {
  title: "MediaQuery",
  component: MediaQuery,
} as Meta;

export const Basic: Story = (args) => <MediaQuery {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <MediaQuery {...args} />;
