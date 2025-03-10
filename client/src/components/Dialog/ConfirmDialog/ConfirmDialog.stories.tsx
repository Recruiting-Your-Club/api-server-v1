import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmDialog } from '.';
import { Button } from '@components/Button';

const meta: Meta<typeof ConfirmDialog> = {
    title: 'Dialog/ConfirmDialog',
    component: ConfirmDialog,
    parameters: {
        docs: {
            description: {
                component: 'ConfirmDialog 컴포넌트입니다.',
            },
        },
    },
};

type Story = StoryObj<typeof ConfirmDialog>;

export const NotificationDialog: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setIsOpen] = useState(false);
        const handleClose = () => {
            setIsOpen(false);
        };
        return (
            <>
                <Button size="full" variant="primary" onClick={() => setIsOpen(true)}>
                    BaseDialog를 기반으로 만든 ConfirmDialog 입니다.
                </Button>
                <ConfirmDialog
                    title={args.title}
                    dialogSize={args.dialogSize}
                    content={args.content}
                    type={args.type}
                    open={open}
                    handleClose={handleClose}
                    titlePosition={args.titlePosition}
                    contentPosition={args.contentPosition}
                    actionPosition={args.actionPosition}
                    buttonSize={args.buttonSize}
                    closeIcon={args.closeIcon}
                    cancleButton={args.cancleButton}
                    actionHandler={args.actionHandler}
                    backdrop={args.backdrop}
                />
            </>
        );
    },
    args: {
        type: 'confirm',
        title: '알림사항',
        content: '공고 게시 시 면접 날짜는 미정으로 등록됩니다. 면접 날짜를 수정하시겠습니까?',
        dialogSize: 'sm',
        open: false,
        backdrop: false,
        titlePosition: 'start',
        contentPosition: 'start',
        actionPosition: 'end',
        buttonSize: 'xl',
        closeIcon: false,
        cancleButton: false,
        handleClose: () => {},
        actionHandler: () => {},
    },
};

export const YesOrNoDialog: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setIsOpen] = useState(false);
        const handleClose = () => {
            setIsOpen(false);
        };
        return (
            <>
                <Button size="full" variant="primary" onClick={() => setIsOpen(true)}>
                    BaseDialog를 기반으로 만든 예 아니오 선택지가 있는 Dialog 입니다.
                </Button>
                <ConfirmDialog
                    title={args.title}
                    dialogSize={args.dialogSize}
                    content={args.content}
                    type={args.type}
                    open={open}
                    handleClose={handleClose}
                    titlePosition={args.titlePosition}
                    contentPosition={args.contentPosition}
                    actionPosition={args.actionPosition}
                    buttonSize={args.buttonSize}
                    closeIcon={args.closeIcon}
                    cancleButton={args.cancleButton}
                    actionHandler={args.actionHandler}
                    backdrop={args.backdrop}
                />
            </>
        );
    },
    args: {
        type: 'warning',
        title: '진심으로 등록 안할거임?',
        content: '공고 게시 시 면접 날짜는 미정으로 등록됩니다. 면접 날짜를 수정하시겠습니까?',
        dialogSize: 'sm',
        open: false,
        backdrop: false,
        titlePosition: 'center',
        contentPosition: 'center',
        actionPosition: 'end',
        buttonSize: 'xl',
        closeIcon: false,
        cancleButton: true,
        handleClose: () => {},
        actionHandler: () => {},
    },
};

export default meta;
