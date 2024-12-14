import type { Meta, StoryObj } from '@storybook/react';
import { CartButton } from './CartButton';

const meta: Meta<typeof CartButton> = {
  title: 'Homework2/CartButton',
  component: CartButton,
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
