import React from 'react';
import {
    inputContainer,
    helperTextStyle,
    labelStyle,
    inputWrapperContainer,
    endNodeStyle,
    startNodeStyle,
    baseInputStyle,
} from './Input.style';
import type { InputHTMLAttributes } from 'react';
import type { SerializedStyles } from '@emotion/react';

export type InputVariant = 'primary' | 'lined';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant?: InputVariant;
    isError?: boolean;
    helperText?: string;
    startNode?: React.ReactNode;
    endNode?: React.ReactNode;
    customCss?: SerializedStyles;
    height?: string;
}

function BaseInput({
    variant = 'primary',
    type = 'text',
    height = '3.6rem',
    isError = false,
    helperText,
    label,
    endNode,
    startNode,
    customCss,
    ...props
}: InputProps) {
    const cssProps = [inputContainer(isError)[variant]];

    return (
        <div css={inputWrapperContainer}>
            {label && <label css={labelStyle}>{label}</label>}

            <div css={[cssProps, customCss]}>
                {startNode && <div css={startNodeStyle}>{startNode}</div>}
                <input css={baseInputStyle(height)} type={type} {...props} />
                {endNode && <div css={endNodeStyle}>{endNode}</div>}
            </div>

            {helperText && <span css={helperTextStyle(isError)}>{helperText}</span>}
        </div>
    );
}
export { BaseInput };
