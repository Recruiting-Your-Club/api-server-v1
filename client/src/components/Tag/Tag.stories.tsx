import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
    title: 'Tag',
    component: Tag,
    parameters: {
        docs: {
            description: {
                component: 'Tag 컴포넌트입니다.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        text: '학술동아리',
    },
};

export const progress: Story = {
    args: {
        variant: 'progress',
        text: '모집중',
    },
};

export const end: Story = {
    args: {
        variant: 'end',
        text: '모집마감',
    },
};
