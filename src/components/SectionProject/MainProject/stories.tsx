import { Story, Meta } from "@storybook/react";
import SectionProject from ".";
import { mockProjects } from "./mockProjects";

export default {
  title: "SectionProject",
  component: SectionProject,
} as Meta;

export const Basic: Story = () => <SectionProject {...mockProjects} />;

export const Default: Story = () => <SectionProject {...mockProjects} />;
