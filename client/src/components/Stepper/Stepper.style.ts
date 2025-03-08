import { css } from '@emotion/react';
import { COLORS } from '@styles/theme/colors';

export const s_stepper = (orientation: string, alternativeLabel: boolean) => {
    return css`
        display: flex;
        ${orientation === 'horizontal' &&
        css`
            flex-direction: row;
            align-items: center;
        `}

        ${orientation === 'vertical' &&
        css`
            flex-direction: column;
        `}

        ${alternativeLabel &&
        css`
            align-items: flex-start;
        `}
    `;
};

export const s_stepConnector = (alternativeLabel: boolean, orientation: string) => {
    return css`
        flex: 1 1 auto;
        min-width: 1rem;
        ${orientation === 'vertical' &&
        css`
            margin-left: 0.8rem;
            min-height: 1rem;
        `};
        ${alternativeLabel &&
        css`
            position: absolute;
            top: 0.7rem;
            left: calc(-50% + 20px);
            right: calc(50% + 20px);
        `}
    `;
};

export const s_stepConnectorLine = (orientation: string, active: boolean, completed: boolean) => {
    return css`
        display: block;
        border-color: ${active || completed ? COLORS.blue[100] : '#ccc'};
        border-radius: 1rem;
        ${orientation === 'horizontal' &&
        css`
            border-top-style: solid;
            border-top-width: 0.2rem;
        `}
        ${orientation === 'vertical' &&
        css`
            border-left-style: solid;
            border-left-width: 1;
            min-height: 1rem;
        `}
    `;
};

export const s_step = (orientation: string, alternativeLabel: boolean) => {
    return css`
        ${orientation === 'horizontal' &&
        css`
            padding-left: 1rem;
            padding-right: 1rem;
        `}

        ${alternativeLabel &&
        css`
            flex: 1;
            position: relative;
        `}
    `;
};

export const s_stepLabel = (alternativeLabel: boolean, disabled: boolean, orientation: string) => {
    return css`
        display: flex;
        align-items: center;
        opacity: ${disabled ? 0.5 : 1};
        ${alternativeLabel &&
        css`
            flex-direction: column;
        `}
        ${orientation === 'vertical' &&
        css`
            text-align: left;
            padding: 0.5rem, 0;
        `}
    `;
};

export const s_stepLabelText = (
    active: boolean,
    completed: boolean,
    error: boolean,
    disabled: boolean,
    alternativeLabel: boolean,
) => {
    return css`
        display: block;
        font-weight: ${active ? 600 : 400};
        color: ${disabled
            ? 'gray'
            : error
              ? 'red'
              : completed
                ? COLORS.blue[100]
                : active
                  ? COLORS.default
                  : 'gray'};
        transition: color 0.2s;
        width: 100%;
        ${alternativeLabel &&
        css`
            margin-top: 1rem;
            text-align: center;
        `}
    `;
};

export const s_stepLabelIconContainer = (alternativeLabel: boolean) => {
    return css`
        flex-shrink: 0;
        display: flex;
        padding-right: ${alternativeLabel ? '0' : '0.5rem'};
    `;
};

export const s_stepLabelOptional = () => {
    return css`
        font-size: 12px;
        text-align: center;
        color: gray;
    `;
};

export const s_stepIcon = css`
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    transition: color 0.2s;
`;

export const s_stepIconText = css`
    fill: white;
    font-size: 1.8rem;
`;
