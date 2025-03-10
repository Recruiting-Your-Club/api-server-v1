import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
    title: '대표 사진',
    component: Avatar,
    parameters: {
        docs: {
            description: {
                component: '대표 사진 컴포넌트입니다. 프로필 사진용으로 적합합니다.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
    args: {
        shape: 'square',
        size: 'lg',
    },
};

export const RoundedSquare: Story = {
    args: {
        shape: 'square',
        size: 'lg',
        radius: '0.5rem',
    },
};

export const Circle: Story = {
    args: {
        shape: 'round',
        size: 'lg',
    },
};

export const xs: Story = {
    args: {
        size: 'xs',
    },
};

export const s: Story = {
    args: {
        size: 's',
    },
};

export const md: Story = {
    args: {
        size: 'md',
    },
};

export const lg: Story = {
    args: {
        size: 'lg',
    },
};

export const xl: Story = {
    args: {
        size: 'xl',
    },
};
