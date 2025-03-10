import { css } from '@emotion/react';
import type { CSSProperties } from '@emotion/serialize';
import type { AvatarShape, AvatarSize } from './Avatar';

interface Size {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
}

export const avatarSize: Record<AvatarSize, Size> = {
    xs: {
        width: '2.5rem',
        height: '2.5rem',
    },
    s: {
        width: '3rem',
        height: '3rem',
    },
    md: {
        width: '3.5rem',
        height: '3.5rem',
    },
    lg: {
        width: '4rem',
        height: '4rem',
    },
    xl: {
        width: '4.5rem',
        height: '4.5rem',
    },
};

export const s_size = (size: AvatarSize) => {
    return css`
        width: ${avatarSize[size].width};
        height: ${avatarSize[size].height};
    `;
};

export const s_shape = (shape: AvatarShape, radius?: string) => {
    switch (shape) {
        case 'square':
            return css`
                border-radius: ${radius ? radius : 0};
            `;
        case 'round':
            return css`
                border-radius: 50%;
                object-fit: cover;
            `;
    }
};
