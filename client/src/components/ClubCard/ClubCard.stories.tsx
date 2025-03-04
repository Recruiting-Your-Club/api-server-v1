import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ClubCard } from '.';
import React from 'react';

const meta: Meta<typeof ClubCard> = {
    title: '동아리 카드 컴포넌트',
    component: ClubCard,
    parameters: {
        docs: {
            description: {
                component: '동아리 카드 컴포넌트입니다.',
            },
        },
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ClubCard>;

export const scheduled: Story = {
    args: {
        imageURL:
            'https://avatars.githubusercontent.com/u/176916276?s=400&u=48a14c04c14ce04adfebdf9290c6e36492b0994d&v=4',
        name: 'Recruting Your Club',
        type: '학술동아리',
        startDate: '2099.03.01',
        endDate: '2099.03.05',
        tag: ['학술동아리', '코딩', '프로그래밍'],
        path: '/',
    },
};
export const progress: Story = {
    args: {
        imageURL:
            'https://avatars.githubusercontent.com/u/176916276?s=400&u=48a14c04c14ce04adfebdf9290c6e36492b0994d&v=4',
        name: 'Recruting Your Club',
        type: '학술동아리',
        startDate: '2025.01.01',
        endDate: '2099.03.01',
        tag: ['학술동아리', '코딩', '프로그래밍'],
        path: '/',
    },
};
export const End: Story = {
    args: {
        imageURL:
            'https://avatars.githubusercontent.com/u/176916276?s=400&u=48a14c04c14ce04adfebdf9290c6e36492b0994d&v=4',
        name: 'Recruting Your Club',
        type: '학술동아리',
        startDate: '2025.01.01',
        endDate: '2025.01.05',
        tag: ['학술동아리', '코딩', '프로그래밍'],
        path: '/',
    },
};
