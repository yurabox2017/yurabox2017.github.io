import type { Meta, StoryObj } from '@storybook/react';
import ModalOverlay from './ModalOverlay';


const meta: Meta<typeof ModalOverlay> = {
    title: 'Homework2/ModalOverlay',
    component: ModalOverlay,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryModalOverlay: Story = {};
