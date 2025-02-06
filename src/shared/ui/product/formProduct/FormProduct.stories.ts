import type { Meta, StoryObj } from '@storybook/react';
import { FormProduct } from './FormProduct';

const meta: Meta<typeof FormProduct> = {
  title: 'Homework2/FormProduct',
  component: FormProduct,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
