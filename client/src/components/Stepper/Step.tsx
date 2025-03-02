import type { ElementType, ReactNode} from 'react';
import React, { useMemo } from 'react';
import { StepperContext, useStepperContext } from './StepperContext';
import { s_step } from './Stepper.style';
import { StepContext } from './StepContext';

interface StepProps {
    active?: boolean;
    children: ReactNode;
    component?: ElementType;
    completed?: boolean;
    disabled?: boolean;
    index?: number;
    last?: boolean;
    customCss?: string;
}

function Step({
    active: activeProp,
    children,
    component: Component = 'div',
    completed: completedProp,
    disabled: disabledProp,
    index = 0,
    last = false,
    customCss,
}: StepProps) {
    const { activeStep, connector, alternativeLabel, orientation } = useStepperContext();

    let [active = false, completed = false, disabled = false] = [activeProp, completedProp, disabledProp];

    if (activeStep === index) {
        active = activeProp !== undefined ? activeProp : true;
    } else if (activeStep > index) {
        completed = completedProp !== undefined ? completedProp : true;
    } else if (activeStep < index) {
        disabled = disabledProp !== undefined ? disabledProp : true;
    }

    const contextValue = useMemo(
        () => ({ index, last, icon: index + 1, active, completed, disabled }),
        [index, last, active, completed, disabled],
    );

    //라벨, 아이콘 수직 조건
    const newChildren = (
        <Component css={[s_step(orientation, alternativeLabel), customCss]}>
            {connector && alternativeLabel && index !== 0 ? connector : null}
            {children}
        </Component>
    );

    return (
        <StepContext.Provider value={contextValue}>
            {/*라벨, 아이콘 수평 조건*/}
            {connector && !alternativeLabel && index !== 0 ? (
                <>
                    {connector}
                    {newChildren}
                </>
            ) : (
                newChildren
            )}
        </StepContext.Provider>
    );
}

export { Step };
