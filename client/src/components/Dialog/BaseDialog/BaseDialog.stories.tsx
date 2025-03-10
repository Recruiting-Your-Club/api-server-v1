import React, { useState } from 'react';
import { Button } from '@components/Button';
import { Text } from '@components/Text';
import XIcon from '@assets/images/xIcon.svg';
import { Dialog } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import theme from '@styles/theme';

type Story = StoryObj<typeof Dialog>;
type Header = StoryObj<typeof Dialog.Header>;
type Content = StoryObj<typeof Dialog.Content>;
type Action = StoryObj<typeof Dialog.Action>;

const meta: Meta<typeof Dialog> = {
    title: 'Dialog/BaseDialog',
    component: Dialog,
    parameters: {
        docs: {
            description: {
                component: '다이얼로그입니다.',
            },
        },
    },
};

export const EmptyDialog: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);
        const handleClose = () => {
            setIsOpen(false);
        };
        return (
            <>
                <Button size="full" variant="primary" onClick={() => setIsOpen(true)}>
                    아무것도 채우지 않은 Dialog입니다. (각 Dialog는 Docs에서 코드 참고부탁)
                </Button>
                <Dialog open={isOpen} handleClose={handleClose} size={args.size} sx={args.sx}>
                    <Dialog.Header position="center">헤더</Dialog.Header>
                    <Dialog.Content>컨텐츠</Dialog.Content>
                    <Dialog.Action>액션</Dialog.Action>
                </Dialog>
            </>
        );
    },
    args: {
        children: 'ReactNode',
        open: false,
        size: 'md',
        handleClose: () => {},
        sx: {},
    },
};

export const DialogHeader: Header = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);
        const handleClose = () => {
            setIsOpen(false);
        };
        return (
            <>
                <Button size="full" variant="primary" onClick={() => setIsOpen(true)}>
                    헤더만 있는 Dialog입니다.
                </Button>
                <Dialog open={isOpen} handleClose={handleClose} size="md">
                    <Dialog.Header
                        position={args.position}
                        sx={{ backgroundColor: theme.colors.blue[100], ...args.sx }}
                        border={args.border}
                    >
                        {args.children}
                    </Dialog.Header>
                </Dialog>
            </>
        );
    },
    args: {
        position: 'start',
        border: false,
        children: '헤더를 넣어주세용',
        sx: {},
    },
    argTypes: {
        position: {
            options: ['start', 'center', 'end'],
            control: { type: 'radio' },
        },
        border: {
            options: [true, false],
            control: { type: 'boolean' },
        },
        children: {
            control: { type: 'text' },
        },
        sx: {
            control: { type: 'object' },
        },
    },
    parameters: {
        controls: {
            exclude: ['open', 'size', 'backdrop', 'handleClose'], // Dialog props 제외
        },
    },
};

export const DialogContent: Content = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);
        const handleClose = () => {
            setIsOpen(false);
        };
        return (
            <>
                <Button size="full" variant="primary" onClick={() => setIsOpen(true)}>
                    컨텐츠만 있는 Dialog입니다.
                </Button>
                <Dialog open={isOpen} handleClose={handleClose} size="md">
                    <div>임의값(헤더가 들어갈자리)</div>
                    <Dialog.Content sx={args.sx}>{args.children}</Dialog.Content>
                    <div>임의값(액션이 들어갈자리)</div>
                </Dialog>
            </>
        );
    },
    args: {
        children: '컨텐츠를 넣어주세용',
        sx: {},
    },
    argTypes: {
        children: {
            control: { type: 'text' },
        },
        sx: {
            control: { type: 'object' },
        },
    },
    parameters: {
        controls: {
            exclude: ['open', 'size', 'backdrop', 'handleClose'], // Dialog props 제외
        },
    },
};

export const DialogAction: Action = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);
        const handleClose = () => {
            setIsOpen(false);
        };
        return (
            <>
                <Button size="full" variant="primary" onClick={() => setIsOpen(true)}>
                    액션만 있는 Dialog입니다.
                </Button>
                <Dialog open={isOpen} handleClose={handleClose} size="md">
                    <div>임의값(헤더가 들어갈자리)</div>
                    <div>임의값(컨텐츠가 들어갈자리)</div>
                    <Dialog.Action
                        position={args.position}
                        sx={{ backgroundColor: theme.colors.blue[100], ...args.sx }}
                        border={args.border}
                    >
                        {args.children}
                    </Dialog.Action>
                </Dialog>
            </>
        );
    },
    args: {
        position: 'start',
        border: false,
        children: '버튼 또는 액션을 만들 요소를 만들어주세용',
        sx: {},
    },
    argTypes: {
        position: {
            options: ['start', 'center', 'end'],
            control: { type: 'radio' },
        },
        border: {
            options: [true, false],
            control: { type: 'boolean' },
        },
        children: {
            control: { type: 'text' },
        },
        sx: {
            control: { type: 'object' },
        },
    },
    parameters: {
        controls: {
            exclude: ['open', 'size', 'backdrop', 'handleClose'], // Dialog props 제외
        },
    },
};

export const BaseDialog: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);
        const handleClose = () => {
            setIsOpen(false);
        };
        return (
            <>
                <Button size="full" variant="primary" onClick={() => setIsOpen(true)}>
                    Empty Dialog에 뼈대를 넣은 Dialog입니다.
                </Button>
                <Dialog
                    open={isOpen}
                    handleClose={handleClose}
                    size={args.size}
                    sx={args.sx}
                    backdrop={args.backdrop}
                >
                    <Dialog.Header sx={{ justifyContent: 'space-between' }}>
                        <Text as="span" type="h4Bold">
                            타이틀
                        </Text>
                        <Button
                            variant="transparent"
                            size="xs"
                            aria-label="close"
                            onClick={handleClose}
                        >
                            <XIcon alt="close" />
                        </Button>
                    </Dialog.Header>
                    <Dialog.Content>
                        <Text type="bodyRegular" textAlign="start">
                            기본적인 뼈대를 만들어보아요
                        </Text>
                    </Dialog.Content>
                    <Dialog.Action>
                        <Button size="full" variant="primary" onClick={handleClose}>
                            확인
                        </Button>
                    </Dialog.Action>
                </Dialog>
            </>
        );
    },
    args: {
        children: 'ReactNode',
        open: false,
        size: 'md',
        backdrop: true,
        handleClose: () => {},
        sx: {},
    },
};

export default meta;
