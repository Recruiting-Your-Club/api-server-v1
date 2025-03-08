import type { SerializedStyles } from '@emotion/react';
import React from 'react';
import { divider } from './Divider.style';

export type DividerColor = 'black' | 'gray';
export type DividerWidth = '70' | '80' | '90' | 'full';
export type DividerWeight = '1' | '2' | '3';

interface DividerProps {
    width?: DividerWidth;
    color?: DividerColor;
    weight?: DividerWeight;
    customCss?: SerializedStyles;
}
function Divider({ width = 'full', color = 'gray', weight = '1', customCss }: DividerProps) {
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
            <hr css={[divider({ width, color, weight }), customCss]} />
        </>
    );
}

export { Divider };
