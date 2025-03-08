import React from 'react';
import { s_stepConnector, s_stepConnectorLine } from './Stepper.style';
import { useStepperContext } from './StepperContext';
import { useStepContext } from './StepContext';
import type { SerializedStyles } from '@emotion/react';

interface StepConnectorProps {
    customCSS?: SerializedStyles;
}

function StepConnector({ customCSS }: StepConnectorProps) {
    //prop destruction

    //lib hooks
    const { alternativeLabel, orientation } = useStepperContext();
    const { active, completed } = useStepContext();

    //state, ref, querystring hooks

    //form hooks

    //query hooks

    //calculated values

    //effects

    //handler

    return (
        <div css={[s_stepConnector(alternativeLabel, orientation), customCSS]}>
            <span css={s_stepConnectorLine(orientation, active, completed)} />
        </div>
    );
}

export { StepConnector };
