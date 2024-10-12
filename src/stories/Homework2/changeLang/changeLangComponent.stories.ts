import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChangeLangComponent from './ChangeLangComponent';

const meta: Meta<typeof ChangeLangComponent> = {
  title: 'Homework2/ChangeLangComponent',
  component: ChangeLangComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChangeLangComponent>;

export const ChangeLangPrimary: Story = {
  args: {
    openModal: action('clicked'),
  },
};
