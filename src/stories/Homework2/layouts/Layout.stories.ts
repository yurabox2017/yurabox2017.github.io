import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Homework2/Layout',
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
