import { css } from '@emotion/react';
import { colors } from '@styles/color';

const baseDisplay = css`
    display: flex;
    padding-inline: 1.5rem;
`;

const centerDisplay = css`
    display: flex;
    align-items: center;
`;

export const baseClubCard = css`
    width: 38rem;
    background-color: ${colors.white};
    padding-top: 1.5rem;
    border-radius: 0.3125rem;
    border: 0.0625rem solid ${colors.gray[800]};
    transition: all 200ms;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0.625rem 0.9375rem rgba(0, 0, 0, 0.1);
        transform: translateY(-0.25rem);
    }
`;

export const titlePart = css`
    ${baseDisplay};
`;

export const clubTitle = css`
    width: 65%;
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    overflow: hidden;
`;

export const statusTag = css`
    ${centerDisplay};
    width: 20%;
    justify-content: flex-end;
    white-space: nowrap;
`;

export const clubImage = css`
    border-radius: 0.3125rem;
    width: 4.5rem;
    height: 4.5rem;
`;

export const clubName = css`
    max-width: 100%;
    display: block;
    overflow: hidden;
    font-size: 1.8rem;
    font-weight: 600;
    text-overflow: ellipsis;
    padding-bottom: 0.25rem;
    white-space: nowrap;
`;

export const clubTypeText = css`
    font-size: 1.425rem;
    color: ${colors.gray[1400]};
    padding-top: 0.25rem;
    padding-bottom: 0rem;
`;

export const calendarPart = css`
    ${baseDisplay};
    padding-block: 1rem;
`;

export const calendarSVG = css`
    ${centerDisplay};
    padding-top: 0.099rem;
    color: ${colors.gray[1600]};
`;

export const dateText = css`
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.gray[2000]};
    padding-left: 0.5rem;
`;

export const line = css`
    border: 0;
    height: 0;
    margin: 0;
    border-top: 0.0625rem solid ${colors.gray[800]};
`;

export const tagDisplay = css`
    ${baseDisplay};
    height: 3.75rem;
    max-width: 90%;
    flex-wrap: nowrap;
    overflow: hidden;
    gap: 1rem;
`;

export const perTag = css`
    ${centerDisplay};
    max-width: 100%;
    white-space: nowrap;
`;

export const invisibleTag = css`
    position: absolute;
    transform: translateX(-624.9375rem);
    white-space: nowrap;
`;
