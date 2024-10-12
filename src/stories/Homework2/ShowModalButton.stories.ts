import type { Meta, StoryObj } from '@storybook/react';
import ShowModalButton from './ShowModalButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ShowModalButton> = {
    title: 'Homework2/ShowModalButton',
    component: ShowModalButton,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof ShowModalButton>;

export const ShowModal: Story = {
    args: {
        openModal: action('clicked'),
    },
};
