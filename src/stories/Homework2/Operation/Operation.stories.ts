import type { Meta, StoryObj } from '@storybook/react';
import Operation from './Operation';


const meta: Meta<typeof Operation> = {
    title: 'Homework2/Operation',
    component: Operation,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryOperation: Story = {
    args: {
        images: ['/free-icon-cleaning-9012135.png', '/free-icon-cleaning-9717764.png'],
        price: 10000,
        title: "Веник",
        description: "Веник с длиной ручкой",
        category: "товары для дома"

    }
};
