import React from 'react';
import { tag } from './Tag.style';
import type { CSSObject } from '@emotion/react';

export type tagVariant = 'primary' | 'progress' | 'end';

export interface TagProps {
    text: string;
    variant: tagVariant;
    sx?: CSSObject;
}
function Tag({ text = 'sample', variant = 'primary', sx }: TagProps) {
    return (
        <div>
            <span css={[tag(variant), sx]}>{text}</span>
        </div>
    );
}
export { Tag };
