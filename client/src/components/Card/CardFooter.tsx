import React from 'react';
import { footerContainer } from './Card.style';

interface CardFooterProps {
    footerHeight?: string;
    children?: React.ReactNode;
}

function CardFooter({ footerHeight = '3.3rem', children }: CardFooterProps) {
    // prop destruction
    // lib hooks
    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers

    return <div css={footerContainer(footerHeight)}>{children}</div>;
}

export { CardFooter };
