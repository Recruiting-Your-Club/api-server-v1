import { css } from '@emotion/react';
import { colors } from '@styles/color';
import type { CSSProperties } from 'react';
import type { StarSize } from './Star';

interface Size {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
}

export const starSize: Record<StarSize, Size> = {
    xs: {
        width: '1rem',
        height: '1rem',
    },
    s: {
        width: '1.5rem',
        height: '1.5rem',
    },
    md: {
        width: '2rem',
        height: '2rem',
    },
    lg: {
        width: '2.5rem',
        height: '2.5rem',
    },
    xl: {
        width: '3rem',
        height: '3rem',
    },
};

export const s_size = (size: StarSize) => {
    return css`
        width: ${starSize[size].width};
        height: ${starSize[size].height};
    `;
};

export const s_star = (filled: boolean) => {
    return css`
        cursor: pointer;
        position: relative;
        background: none;
        border: none;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
            width: 100%;
            height: 100%;
            fill: ${filled ? colors.default : colors.disabled};
        }
    `;
};

export const s_halfStar = (percentage: number) => {
    return css`
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        & > svg {
            fill: ${colors.default};
            clip-path: inset(0 ${100 - percentage}% 0 0);
        }
    `;
};

export const ratingContainer = () => {
    return css`
        display: flex;
        align-items: center;
        gap: 0.4rem;
    `;
};
