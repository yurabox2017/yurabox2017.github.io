import type { Meta, StoryObj } from '@storybook/react';
import CartPage from './CartPage';

const meta: Meta<typeof CartPage> = {
  title: 'Homework2/CartPage',
  component: CartPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryCartProduct: Story = {};
