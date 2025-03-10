import { css } from '@emotion/react';
import theme from '@styles/theme';

const baseDisplay = css`
    display: flex;
    padding-inline: 1.5rem;
`;

const baseCardRoot = css`
    background-color: ${theme.colors.white};
    padding-block: 1.5rem;
    border: 0.0625rem solid ${theme.colors.gray[300]};
`;

export const baseCard = (width: string, radius: string, hover: boolean) => {
    return css`
        ${baseCardRoot}
        width: ${width};
        border-radius: ${radius};

        ${hover &&
        css`
            &:hover {
                cursor: pointer;
                transition: all 200ms;
                box-shadow: 0 0.625rem 0.9375rem rgba(0, 0, 0, 0.1);
                transform: translateY(-0.25rem);
            }
        `}
    `;
};

export const cardTopContainer = css`
    ${baseDisplay};
`;

export const titleContainer = (paddingLeft = '0') => css`
    width: 65%;
    display: flex;
    flex-direction: column;
    padding-left: ${paddingLeft};
    overflow: hidden;
    gap: 0.3rem;
`;

export const cardBottomContainer = css`
    /* ${baseDisplay}; */
    padding-inline: 1.5rem;
    padding-block: 0.95rem;
`;

export const line = css`
    border: 0;
    height: 0;
    margin: 0;
    border-top: 0.0625rem solid ${theme.colors.gray[300]};
`;

export const footerContainer = (footerHeight: string) => css`
    ${baseDisplay};
    height: ${footerHeight};
    align-items: center;
    margin-bottom: -1.5rem;
    overflow: hidden;
`;
