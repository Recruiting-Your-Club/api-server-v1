import { css } from '@emotion/react';
import theme from '@styles/theme';
import type { ToggleVariant } from './Toggle';

export const hiddenCheckbox = css`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

const toggleBase = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    justify-content: space-between;
`;

export const toggleContainer = (variant: ToggleVariant, width: string, isChecked: boolean) => {
    switch (variant) {
        case 'primary':
            return css`
                ${toggleBase}

                padding: 0.2rem 0.1rem;
                ${isChecked
                    ? `background-color: ${theme.colors.disabled};`
                    : `background-color: ${theme.colors.default};`}
                border-radius: 1.1rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                width: ${width};
            `;
        case 'text':
            return css`
                ${toggleBase}
                padding: 0.2rem;
                background-color: white;
                border-radius: 0.375rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                width: ${width};
            `;
        case 'secondText':
            return css`
                ${toggleBase}
                padding: 0.2rem;
                background-color: ${theme.colors.default};
                border-radius: 1.2rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                width: ${width};
            `;
        default:
            return css`
                ${toggleBase}
                padding: 0.2rem 0.1rem;
                ${isChecked
                    ? `background-color: ${theme.colors.disabled};`
                    : `background-color: ${theme.colors.default};`}
                border-radius: 1.1rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                width: ${width};
            `;
    }
};

const textBase = css`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 1.125rem;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
`;
const noneTextBase = css`
    display: flex;
    align-items: center;
    border-radius: 5rem;
    padding: 1rem 1rem;
`;

export const leftTextContainer = (variant: ToggleVariant, isChecked: boolean) => {
    switch (variant) {
        case 'primary':
            return css`
                ${noneTextBase}
                ${isChecked ? `background-color: ${theme.colors.white};` : `color: #64748b;`}
            `;
        case 'text':
            return css`
                border-radius: 0.25rem;
                ${textBase}
                ${isChecked
                    ? ` color: ${theme.colors.default};   background-color: #f4f7ff; `
                    : ` color: #64748b;`}
            `;
        case 'secondText':
            return css`
                border-radius: 1rem;
                ${textBase}
                ${isChecked
                    ? `color: ${theme.colors.default}; background-color: ${theme.colors.white};`
                    : `color: ${theme.colors.white};`}
            `;
        default:
            return css`
                ${noneTextBase}
                ${isChecked ? `background-color: ${theme.colors.white};` : `color: #64748b;`}
            `;
    }
};

export const rightTextContainer = (variant: ToggleVariant, isChecked: boolean) => {
    switch (variant) {
        case 'primary':
            return css`
                ${noneTextBase}
                ${!isChecked ? `background-color: ${theme.colors.white};` : `color: #64748b;`}
            `;
        case 'text':
            return css`
                border-radius: 0.25rem;
                ${textBase}
                ${!isChecked
                    ? `color: ${theme.colors.default};background-color: #f4f7ff;`
                    : `color: #64748b;`}
            `;
        case 'secondText':
            return css`
                border-radius: 1rem;
                ${textBase}
                ${!isChecked
                    ? `color: ${theme.colors.default};background-color: ${theme.colors.white};`
                    : `color: ${theme.colors.white};`}
            `;
        default:
            return css`
                ${noneTextBase}
                ${!isChecked ? `background-color: ${theme.colors.white};` : `color: #64748b;`}
            `;
    }
};
