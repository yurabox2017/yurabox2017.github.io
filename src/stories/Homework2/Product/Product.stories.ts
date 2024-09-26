import type { Meta, StoryObj } from '@storybook/react';
import Product from './Product';


const meta: Meta<typeof Product> = {
    title: 'Homework2/Product',
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
        title: "Чистящие средства",
        price: 5000,
        description: "Хорошо очищает любые загрязнения"
    }
};
