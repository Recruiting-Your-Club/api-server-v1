import { css } from '@emotion/react';
import theme from '@styles/theme';
import type { DividerColor, DividerWeight, DividerWidth } from './Divider';

const WIDTH = {
    70: '70%',
    80: '80%',
    90: '90%',
    full: '100%',
};

const COLOR = {
    black: theme.colors.black,
    gray: theme.colors.gray[300],
};

const WEIGHT = {
    1: '0.0625rem',
    2: '0.125rem',
    3: '0.1875rem',
};

export const divider = ({
    width,
    color,
    weight,
}: {
    width: DividerWidth;
    color: DividerColor;
    weight: DividerWeight;
}) => {
    return css`
        width: ${WIDTH[width]};
        height: 0;
        border: 0;
        margin: 0;
        border-top: ${WEIGHT[weight]} solid ${COLOR[color]};
    `;
};
