import type { ReactNode } from 'react';
import React from 'react';
import { s_stepIcon, s_stepIconText } from './Stepper.style';
import { COLORS } from '@styles/theme/colors';
import WarningIcon from '@assets/images/warningIcon.svg';

interface StepIconProps {
    active?: boolean;
    completed?: boolean;
    error?: boolean;
    disabled?: boolean;
    icon: ReactNode;
}

function StepIcon({
    active = false,
    completed = false,
    error = false,
    disabled = false,
    icon,
}: StepIconProps) {
    // prop destruction

    // lib hooks

    // state, ref, querystring hooks

    // form hooks

    // query hooks

    // calculated values

    // effects

    // handlers
    if (error) {
        return <WarningIcon />;
    }

    return (
        //NOTE: svg 내부에 조건부 로직이 포함되어 있어 따로 assets폴더에서 import해오지 않고 직접 작성
        <svg viewBox="0 0 30 30" css={s_stepIcon}>
            <circle
                cx="15"
                cy="15"
                r="15"
                fill={completed ? COLORS.blue[100] : active ? COLORS.default : COLORS.disabled}
            />

            <text x="15" y="15" textAnchor="middle" dominantBaseline="central" css={s_stepIconText}>
                {icon}
            </text>
        </svg>
    );
}

export { StepIcon };
