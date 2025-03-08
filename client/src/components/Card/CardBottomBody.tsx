import React from 'react';
import { cardBottomContainer } from './Card.style';

interface CardBottomBodyProps {
    children?: React.ReactNode;
}
function CardBottomBody({ children }: CardBottomBodyProps) {
    // prop destruction
    // lib hooks
    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers

    return <div css={cardBottomContainer}>{children}</div>;
}

export { CardBottomBody };
