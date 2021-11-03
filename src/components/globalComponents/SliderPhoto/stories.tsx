import { Story, Meta } from "@storybook/react";
import SliderPhoto from ".";
import { mockSlides } from "./mockSlides";

export default {
  title: "SliderPhoto",
  component: SliderPhoto,
} as Meta;

export const Basic: Story = () => (
  <SliderPhoto {...mockSlides} receptorCards="skilss" />
);

export const Default: Story = () => (
  <SliderPhoto {...mockSlides} receptorCards="skilss" />
);
