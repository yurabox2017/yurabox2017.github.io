import type { Meta, StoryObj } from '@storybook/react';
import { FullProduct } from './FullProduct';



const meta: Meta<typeof FullProduct> = {
    title: 'Homework2/FullProduct',
    component: FullProduct,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryFullProduct: Story = {
    args: {
        images: ['/free-icon-cleaning-9012135.png', '/free-icon-cleaning-9717764.png'],
        price: 10000,
        title: "Веник",
        description: "Веник с длиной ручкой",
        category: "товары для дома"

    }
};
