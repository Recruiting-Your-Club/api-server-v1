import type { ReactNode, ElementType, ReactElement } from 'react';
import React, { useMemo, Children, cloneElement, isValidElement } from 'react';
import { s_stepper } from './Stepper.style';
import { StepperContext } from './StepperContext';
import { StepConnector } from './StepConnector';
import type { SerializedStyles } from '@emotion/react';

//interface
interface StepperProps {
    activeStep?: number;
    alternativeLabel?: boolean;
    children: ReactNode;
    component?: ElementType;
    connector?: ReactNode;
    orientation?: 'horizontal' | 'vertical';
    customCSS?: SerializedStyles;
}

const defaultConnector = <StepConnector />;

function Stepper({
    activeStep = 0,
    alternativeLabel = false,
    children,
    component: Component = 'div',
    connector = defaultConnector,
    orientation = 'horizontal',
    customCSS,
}: StepperProps) {
    //prop destruction

    //lib hooks
    const contextValue = useMemo(
        () => ({ activeStep, alternativeLabel, connector, orientation }),
        [activeStep, alternativeLabel, connector, orientation],
    );
    //state, ref, querystring hooks

    //form hooks

    //query hooks

    //calculated values

    const steps = Children.toArray(children)
        .filter(isValidElement)
        .map((step, index) => {
            const props = step.props ?? {};

            // NOTE: 기존 step의 props를 유지하면서 새로운 props(index, last) 추가를 위해 cloneElement 사용
            return cloneElement(step as ReactElement, {
                index,
                last: index + 1 === Children.toArray(children).length,
                ...props,
            });
        });

    //effects

    //handlers

    return (
        <StepperContext.Provider value={contextValue}>
            <Component css={[s_stepper(orientation, alternativeLabel), customCSS]}>
                {steps}
            </Component>
        </StepperContext.Provider>
    );
}

export { Stepper };
