import React, { ComponentType, FunctionComponent, useState } from 'react';

import { Stepper } from './Stepper';
import { Step } from './Step';
import { StepLabel } from './StepLabel';
import { Button } from '@components/Button';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Stepper> = {
    title: 'stepper',
    component: Stepper,
};

export default meta;
type Story = StoryFn<typeof Stepper>;

const StepperTemplate: Story = (args) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div style={{ width: '800px' }}>
            <Stepper {...args} activeStep={activeStep}>
                <Step>
                    <StepLabel>Step 1</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 2</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 3</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 4</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 5</StepLabel>
                </Step>
            </Stepper>
            <div
                style={{
                    display: 'flex',
                    marginTop: '2rem',
                    textAlign: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    variant="primary"
                    size="s"
                    onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                >
                    이전
                </Button>
                <Button
                    variant="primary"
                    size="s"
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, 4))}
                >
                    다음
                </Button>
            </div>
        </div>
    );
};

export const Default = StepperTemplate.bind({});
Default.args = {};

export const AlternativeLabel = StepperTemplate.bind({});
AlternativeLabel.args = {
    orientation: 'horizontal', //default값
    alternativeLabel: true,
};

export const Vertical = StepperTemplate.bind({});
Vertical.args = {
    orientation: 'vertical',
};

export const ErrorDefault: Story = (args) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div style={{ width: '800px' }}>
            <Stepper {...args} activeStep={activeStep}>
                <Step>
                    <StepLabel>Step 1</StepLabel>
                </Step>
                <Step>
                    <StepLabel error subText={'이메일 오류'}>
                        Step 2
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 3</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 4</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 5</StepLabel>
                </Step>
            </Stepper>
            <div
                style={{
                    display: 'flex',
                    marginTop: '2rem',
                    textAlign: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    variant="primary"
                    size="s"
                    onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                >
                    이전
                </Button>
                <Button
                    variant="primary"
                    size="s"
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, 4))}
                >
                    다음
                </Button>
            </div>
        </div>
    );
};

export const ErrorAlternativeLabel = ErrorDefault.bind({});
ErrorAlternativeLabel.args = {
    alternativeLabel: true,
};

export const ErrorVertical = ErrorDefault.bind({});
ErrorVertical.args = {
    orientation: 'vertical',
};
