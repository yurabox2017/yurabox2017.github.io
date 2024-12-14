import type { Meta, StoryObj } from '@storybook/react';
import CartProduct from './CartProduct';

const meta: Meta<typeof CartProduct> = {
  title: 'Homework2/CartProduct',
  component: CartProduct,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryCartProduct: Story = {};
