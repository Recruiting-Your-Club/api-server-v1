import type { ReactNode, ElementType, ReactElement } from 'react';
import React, { useMemo, Children, cloneElement, isValidElement } from 'react';
import { s_stepper } from './Stepper.style';
import { StepperContext } from './StepperContext';
import { StepConnector } from './StepConnector';

interface StepperProps {
    activeStep?: number;
    alternativeLabel?: boolean; //Label 수평 or 수직
    children: ReactNode; //Step
    component?: ElementType; //하위 컴포넌트
    connector?: ReactNode; //연결선
    orientation?: 'horizontal' | 'vertical';
    customCSS?: string;
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
    const childrenArray = Children.toArray(children).filter(isValidElement);
    const steps = childrenArray.map((step, index) => {
        const props = step.props || {};

        return cloneElement(step as ReactElement, {
            index,
            last: index + 1 === childrenArray.length,
            ...props,
        });
    });

    const contextValue = useMemo(
        () => ({ activeStep, alternativeLabel, connector, orientation }),
        [activeStep, alternativeLabel, connector, orientation],
    );

    return (
        <StepperContext.Provider value={contextValue}>
            <Component css={[s_stepper(orientation, alternativeLabel), customCSS]}>{steps}</Component>
        </StepperContext.Provider>
    );
}

export { Stepper };
