import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChangeThemeButton from './ChangeThemeButton';

const meta: Meta<typeof ChangeThemeButton> = {
  title: 'Homework2/ChangeThemeButton',
  component: ChangeThemeButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChangeThemeButton>;

export const ChangeThemePrimary: Story = {
  args: {
    openModal: action('clicked'),
  },
};
