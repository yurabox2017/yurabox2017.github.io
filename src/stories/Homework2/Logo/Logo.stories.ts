import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Homework2/Logo',
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WithAnImage: Story = {};
