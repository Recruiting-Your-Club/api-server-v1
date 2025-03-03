import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
    title: 'Text',
    component: Text,
    parameters: {
        docs: {
            description: {
                component: 'Text 컴포넌트 입니다.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Display: Story = {
    args: {
        children: 'display입니다.',
        type: 'displayBold',
        color: 'black',
        textAlign: 'center',
    },
};

export const h1Bold: Story = {
    args: {
        children: 'h1입니다.',
        type: 'h1Bold',
        color: 'black',
        textAlign: 'center',
    },
};
export const h2Bold: Story = {
    args: {
        children: 'h2입니다.',
        type: 'h2Bold',
        color: 'black',
        textAlign: 'center',
    },
};
export const h3Bold: Story = {
    args: {
        children: 'h3입니다.',
        type: 'h3Bold',
        color: 'black',
        textAlign: 'center',
    },
};
export const h4Bold: Story = {
    args: {
        children: 'h4입니다.',
        type: 'h4Bold',
        color: 'black',
        textAlign: 'center',
    },
};
export const bodyBold: Story = {
    args: {
        children: 'bodyBold입니다.',
        type: 'bodyBold',
        color: 'black',
        textAlign: 'center',
    },
};
export const captionBold: Story = {
    args: {
        children: 'captionBold입니다.',
        type: 'captionBold',
        color: 'black',
        textAlign: 'center',
    },
};
export const subCaptionBold: Story = {
    args: {
        children: 'subCaptionBold입니다.',
        type: 'subCaptionBold',
        color: 'black',
        textAlign: 'center',
    },
};
