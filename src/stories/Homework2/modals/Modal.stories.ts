import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal'

const meta: Meta<typeof Modal> = {
    title: 'Homework2/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryModal: Story = {
    args: {
        visible: true,
        children: ''
    }
};