import React from 'react';
import { cardTopContainer } from './Card.style';

interface CardTopBody {
    children?: React.ReactNode;
}
function CardTopBody({ children }: CardTopBody) {
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
            <div css={cardTopContainer}>{children}</div>
        </>
    );
}

export { CardTopBody };
