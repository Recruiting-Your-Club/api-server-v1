import { css } from '@emotion/react';
import { colors } from '@styles/color';

export const s_stepper = (orientation: string, alternativeLabel: boolean) => {
    return css`
        display: flex;
        flex-direction: ${orientation === 'vertical' ? 'column' : 'row'}
        align-items: ${alternativeLabel ? 'flex-start' : 'center'}
    `;
};

export const s_stepConnector = () => {
    return css`
        width: 5rem;
        height: 2px;
        background-color: ${colors.disabled};
    `;
};
