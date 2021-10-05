import { Story, Meta } from '@storybook/react'
import Teste from '.'

export default {
  title: 'Teste',
  component: Teste
} as Meta

export const Basic: Story = (args) => <Teste {...args}/>

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Teste {...args}/>;
