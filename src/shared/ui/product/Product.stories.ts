import type { Meta, StoryObj } from '@storybook/react';
import Product from './Product';

const meta: Meta<typeof Product> = {
  title: 'Homework2/ShortProduct',
  component: Product,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryProduct: Story = {
  args: {
    name: 'Чистящие средства',
    price: 5000,
    desc: 'Хорошо очищает любые загрязнения',
    photo: '/free-icon-household-7029117.png',
  },
};
