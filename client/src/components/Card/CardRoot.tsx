import type { SerializedStyles } from '@emotion/react';
import React from 'react';
import { baseCard } from './Card.style';

interface CardRootProps {
    width?: string;
    radius?: string;
    hover?: boolean;
    customCss?: SerializedStyles;
    children?: React.ReactNode;
    onClick?: () => void;
    onClickHandler?: () => void;
}

function CardRoot({
    width = '35rem',
    radius = '0.3125rem',
    hover = false,
    customCss,
    children,
    onClick,
    onClickHandler,
}: CardRootProps) {
    // prop destruction
    // lib hooks
    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers

    return (
        <div
            onClick={onClick}
            onKeyDown={onClickHandler}
            css={[baseCard(width, radius, hover), customCss]}
            tabIndex={0}
            role="button"
        >
            {children}
        </div>
    );
}

export { CardRoot };
