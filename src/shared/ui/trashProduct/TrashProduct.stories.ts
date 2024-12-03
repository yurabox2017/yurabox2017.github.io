import type { Meta, StoryObj } from '@storybook/react';
import TrashProduct from './TrashProduct';

const meta: Meta<typeof TrashProduct> = {
  title: 'Homework2/TrashProduct',
  component: TrashProduct,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryTrashProduct: Story = {};
