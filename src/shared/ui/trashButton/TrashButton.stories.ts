import type { Meta, StoryObj } from '@storybook/react';
import { TrashButton } from './TrashButton';

const meta: Meta<typeof TrashButton> = {
  title: 'Homework2/TrashButton',
  component: TrashButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CounterZero: Story = {
  args: {
    counter: 0,
  },
};

export const CounterMoreZero: Story = {
  args: {
    counter: 1,
  },
};
