import type { TYPOGRAPHY } from '@styles/theme/typography';
import type { CSSProperties, ElementType, PropsWithChildren } from 'react';
import React from 'react';
import { textStyle } from './Text.style';

export type TextType = keyof typeof TYPOGRAPHY;
export type TextColor = 'black' | 'primary' | 'warning' | 'caption' | 'subCaption' | 'helper';

interface TextProps extends PropsWithChildren {
    type: TextType;
    color?: TextColor;
    textAlign?: CSSProperties['textAlign'];
    noWrap?: boolean;
    cropped?: boolean;
    as?: ElementType;
}
function Text({
    type = 'bodyRegular',
    color = 'black',
    textAlign = 'center',
    noWrap = false,
    cropped = false,
    children,
    as: Tag = 'p',
}: TextProps) {
    return <Tag css={textStyle({ type, color, textAlign, noWrap, cropped })}>{children}</Tag>;
}
export { Text };
