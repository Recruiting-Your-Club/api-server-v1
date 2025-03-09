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
    inputSx?: SerializedStyles;
    labelSx?: SerializedStyles;
    helperSx?: SerializedStyles;
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
    inputSx,
    labelSx,
    helperSx,
    ...props
}: InputProps) {
    const cssProps = [inputContainer(isError)[variant]];

    return (
        <div css={inputWrapperContainer}>
            {label && <label css={[labelStyle(isError), labelSx]}>{label}</label>}

            <div css={[cssProps, inputSx]}>
                {startNode && <div css={startNodeStyle}>{startNode}</div>}
                <input css={baseInputStyle(height)} type={type} {...props} />
                {endNode && <div css={endNodeStyle}>{endNode}</div>}
            </div>

            {helperText && <span css={[helperTextStyle(isError), helperSx]}>{helperText}</span>}
        </div>
    );
}
export { BaseInput };
