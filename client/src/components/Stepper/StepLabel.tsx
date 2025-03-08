import type { ReactNode } from 'react';
import React from 'react';
import { useStepperContext } from './StepperContext';
import { useStepContext } from './StepContext';
import {
    s_stepLabel,
    s_stepLabelIconContainer,
    s_stepLabelOptional,
    s_stepLabelText,
} from './Stepper.style';
import { StepIcon } from './StepIcon';
import type { SerializedStyles } from '@emotion/react';

export interface StepLabelProps {
    children: ReactNode;
    error?: boolean;
    subText?: ReactNode;
    customCSS?: SerializedStyles;
}

function StepLabel({ children, error = false, subText, customCSS }: StepLabelProps) {
    // prop destruction

    // lib hooks
    const { alternativeLabel, orientation } = useStepperContext();
    const { active, completed, disabled, icon } = useStepContext();

    // state, ref, querystring hooks

    // form hooks

    // query hooks

    // calculated values

    // effects

    // handlers

    return (
        <span css={[s_stepLabel(alternativeLabel, disabled, orientation), customCSS]}>
            <span css={s_stepLabelIconContainer(alternativeLabel)}>
                <StepIcon
                    active={active}
                    completed={completed}
                    error={error}
                    disabled={disabled}
                    icon={icon}
                />
            </span>
            <div>
                <span css={s_stepLabelText(active, completed, error, disabled, alternativeLabel)}>
                    {children}
                </span>
                {subText && <div css={s_stepLabelOptional}>{subText}</div>}
            </div>
        </span>
    );
}

export { StepLabel };
