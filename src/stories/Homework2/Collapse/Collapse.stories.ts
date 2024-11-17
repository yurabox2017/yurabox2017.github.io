import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';

const meta: Meta<typeof Collapse> = {
  title: 'Homework2/Collapse',
  component: Collapse,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    opened: true,
    children: `Hello Word`,
  },
};
