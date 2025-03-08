import React, { useState } from 'react';
import { BaseInput, PasswordInput } from '@components/Input';
import { Button } from '@components/Button';
import { Stepper } from '@components/Stepper/Stepper';
import { Step } from '@components/Stepper/Step';
import { StepLabel } from '@components/Stepper/StepLabel';
import { css } from '@emotion/react';
function TestPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [error, setError] = useState(false);

    const stepComponent = (step: number) => {
        switch (step) {
            case 0:
                return <div>step 1 자기소개서</div>;
            case 1:
                return <div>step 2 자기소개서</div>;
            case 2:
                return <div>step 3 자기소개서</div>;
            case 3:
                return <div>step 4 자기소개서</div>;
            case 4:
                return <div>step 5 자기소개서</div>;
            default:
                return <div> 오류입니다. </div>;
        }
    };
    return (
        <div style={{ width: '800px' }}>
            <div style={{ marginBottom: '100px' }}></div>
            <Stepper activeStep={activeStep} orientation="horizontal" alternativeLabel>
                <Step>
                    <StepLabel>공고 상세 정보 편집</StepLabel>
                </Step>
                <Step>
                    <StepLabel>사전 질문 설정</StepLabel>
                </Step>
                <Step>
                    <StepLabel>자기소개서 설정</StepLabel>
                </Step>
                <Step>
                    <StepLabel>면접 설정</StepLabel>
                </Step>
                <Step>
                    <StepLabel>미리보기</StepLabel>
                </Step>
            </Stepper>
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <div>{stepComponent(activeStep)}</div>
            </div>
            <button onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}>이전</button>
            <button onClick={() => setActiveStep((prev) => Math.min(prev + 1, 4))}>다음</button>
        </div>
    );
}
export { TestPage };
