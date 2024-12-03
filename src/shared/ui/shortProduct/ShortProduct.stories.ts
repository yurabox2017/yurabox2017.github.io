import type { Meta, StoryObj } from '@storybook/react';
import ShortProduct from './ShortProduct';

const meta: Meta<typeof ShortProduct> = {
  title: 'Homework2/ShortProduct',
  component: ShortProduct,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryProduct: Story = {
  args: {
    title: 'Чистящие средства',
    price: 5000,
    description: 'Хорошо очищает любые загрязнения',
    image: '/free-icon-household-7029117.png',
  },
};
