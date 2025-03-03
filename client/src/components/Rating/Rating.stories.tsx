import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import { Rating } from '.';

const meta: Meta<typeof Rating> = {
    title: '평점 컴포넌트',
    component: Rating,
    parameters: {
        docs: {
            description: {
                component: '평점 컴포넌트입니다.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {
        value: 3,
        totalStars: 5,
        size: 'md',
        type: 'click',
    },
};

export const TenStars: Story = {
    args: {
        value: 7,
        totalStars: 10,
        size: 'md',
        type: 'click',
    },
};

export const Display: Story = {
    args: {
        value: 4.3,
        totalStars: 5,
        size: 'lg',
        type: 'display',
    },
};

export const Interactive = () => {
    const [rating, setRating] = useState(2);
    const [type, setType] = useState<'click' | 'display'>('click');

    const handleClick = (newRating: number) => {
        if (type === 'click') {
            setRating(newRating);
            setType('display');
        }
    };

    const resetToClickMode = () => {
        setType('click');
    };

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Rating value={rating} onChange={handleClick} type={type} />
                <span>{`(${rating})`}</span>
            </div>
            <button
                onClick={resetToClickMode}
                style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
            >
                편집
            </button>
        </div>
    );
};
