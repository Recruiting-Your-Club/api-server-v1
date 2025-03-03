import { css } from '@emotion/react';
import theme from '@styles/theme';

const baseTag = css`
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: 700;
`;
export const tag = {
    primary: css`
        ${baseTag};
        background-color: ${theme.colors.inputBorder};
        color: ${theme.colors.textHelper};
    `,
    progress: css`
        ${baseTag};
        background-color: ${theme.colors.blue[100]};
        color: ${theme.colors.defaultHover};
    `,
    end: css`
        ${baseTag};
        background-color: ${theme.colors.red[200]};
        color: ${theme.colors.red[800]};
    `,
};
