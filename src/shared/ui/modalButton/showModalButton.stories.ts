import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import ShowModalButton from './ShowModalButton';

const meta: Meta<typeof ShowModalButton> = {
  title: 'Homework2/ShowModalButton',
  component: ShowModalButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShowModalButton>;

export const ShowModal: Story = {
  args: {
    openModal: action('clicked'),
  },
};
