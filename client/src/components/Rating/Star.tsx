import React from 'react';
import type { SerializedStyles } from '@emotion/react';
import { s_halfStar, s_size, s_star } from './Rating.style';

export type StarSize = 'xs' | 's' | 'md' | 'lg' | 'xl';
const STAR_PATH =
    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
const STAR_VIEWBOX = '0 0 24 24';

interface StarProps {
    filled: boolean;
    partialFill?: number;
    size: StarSize;
    customCSS?: SerializedStyles;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

function StarSVG() {
    return (
        <svg viewBox={STAR_VIEWBOX}>
            <path d={STAR_PATH} />
        </svg>
    );
}

export function Star({
    filled,
    partialFill,
    size,
    customCSS,
    onClick,
    onMouseEnter,
    onMouseLeave,
}: StarProps) {
    const cssProp = [s_size(size), s_star(filled)];

    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            css={[cssProp, customCSS]}
        >
            <StarSVG />

            {partialFill && partialFill > 0 && partialFill < 1 ? (
                <div css={s_halfStar(partialFill * 100)}>
                    <StarSVG />
                </div>
            ) : null}
        </button>
    );
}
