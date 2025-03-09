import React from 'react';
import { createPortal } from 'react-dom';
import {
    backdropContainer,
    dialogContainer,
    headerContainer,
    contentContainer,
    actionContainer,
} from './BaseDialog.style';
import type { CSSObject } from '@emotion/react';
import type { ReactNode } from 'react';
import type { PositionType, DialogSize } from '../types';

interface Size extends CSSObject {
    width?: CSSObject['width'];
    height?: CSSObject['height'];
}

export const dialogSize: Record<DialogSize, Size> = {
    sm: {
        width: '35rem',
    },
    md: {
        width: '50rem',
    },
    lg: {
        width: '70rem',
    },
    xl: {
        width: '90rem',
    },
    full: {
        width: '100%',
        height: '100%',
    },
};

function BaseDialog({
    children,
    open,
    size = 'md',
    sx,
    backdrop = false,
    handleClose,
}: {
    children: React.ReactNode;
    open: boolean;
    backdrop?: boolean;
    size?: DialogSize;
    sx?: CSSObject;
    handleClose: () => void;
}) {
    // prop destruction
    // lib hooks
    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers
    return (
        <>
            {open &&
                createPortal(
                    <>
                        <div
                            css={backdropContainer}
                            onClick={() => backdrop && handleClose()}
                            aria-hidden="true"
                        />
                        <div css={[dialogContainer, dialogSize[size], sx]}>{children}</div>
                    </>,
                    document.body,
                )}
        </>
    );
}

function DialogHeader({
    border = false,
    children,
    sx,
    position = 'start',
}: {
    position?: PositionType;
    border?: boolean;
    children: ReactNode;
    sx?: CSSObject;
}) {
    return <header css={[headerContainer(border, position), sx]}>{children}</header>;
}

function DialogContent({ children, sx }: { children: ReactNode; sx?: CSSObject }) {
    return <div css={[contentContainer, sx]}>{children}</div>;
}

function DialogAction({
    children,
    sx,
    border = false,
    position = 'center',
}: {
    children: ReactNode;
    sx?: CSSObject;
    border?: boolean;
    position?: PositionType;
}) {
    return <div css={[actionContainer(border, position), sx]}>{children}</div>;
}

const Dialog = Object.assign(BaseDialog, {
    Header: DialogHeader,
    Content: DialogContent,
    Action: DialogAction,
});

export { Dialog };
