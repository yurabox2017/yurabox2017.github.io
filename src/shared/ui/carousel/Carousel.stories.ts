import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Homework2/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const DefaultCarousel: Story = {
  args: {
    images: [
      '/free-icon-cleaning-9012135.png',
      '/free-icon-cleaning-9717764.png',
      '/yoga-mat-cleaning-kit.png',
      '/cleaner.png',
    ],
  },
};
