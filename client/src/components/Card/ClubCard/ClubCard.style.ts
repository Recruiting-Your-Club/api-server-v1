import { css } from '@emotion/react';
import theme from '@styles/theme';

const centerDisplay = css`
    display: flex;
    align-items: center;
`;

export const statusTag = css`
    ${centerDisplay};
    width: 20%;
    justify-content: flex-end;
    white-space: nowrap;
`;

export const tagDisplay = css`
    display: flex;
    align-items: center;
    padding-block: 2rem;
    width: 90%;
    flex-wrap: nowrap;
    overflow: hidden;
    gap: 1rem;
`;

export const perTag = css`
    max-width: 100%;
    white-space: nowrap;
`;

export const invisibleTag = css`
    position: absolute;
    transform: translateX(-624.9375rem);
    white-space: nowrap;
`;
