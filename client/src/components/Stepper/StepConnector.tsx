import React from 'react';
import { s_stepConnector } from './Stepper.style';

interface StepConnectorProps {
    customCSS?: string;
}

function StepConnector({ customCSS }: StepConnectorProps) {
    const cssProps = [s_stepConnector, customCSS];
    return <div css={cssProps}></div>;
}

export { StepConnector };
