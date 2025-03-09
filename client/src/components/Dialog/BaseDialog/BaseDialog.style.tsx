import { css } from '@emotion/react';
import theme from '@styles/theme';
import type { PositionType } from '../types';

export const backdropContainer = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.gray[500]};
    z-index: 100;
    opacity: 0;
    backdrop-filter: blur(0px); /* 초기 상태 명시 */
    animation: backdrop 0.2s ease-in-out forwards; // forwards는 애니메이션 종료 후 유지
    @keyframes backdrop {
        from {
            backdrop-filter: blur(0);
            opacity: 0;
        }
        to {
            backdrop-filter: blur(10px);
            opacity: 0.5;
        }
    }
`;

export const dialogContainer = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 35rem;
    min-height: 20rem;
    max-width: 120rem;
    max-height: 90rem;
    border-radius: 1rem;
    background-color: ${theme.colors.white};
    z-index: 101;
    animation: dialogdown 0.2s ease-in-out;

    @keyframes dialogdown {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(-15%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(0);
        }
    }
`;

const positionMap: Record<PositionType, string> = {
    center: 'center',
    end: 'flex-end',
    start: 'flex-start',
};

export const headerContainer = (border: boolean, position: PositionType) => css`
    width: 100%;
    display: flex;
    justify-content: ${positionMap[position]};
    align-items: center;
    border-bottom: ${border ? `1px solid ${theme.colors.gray[300]}` : 0};
    padding: 2rem 3rem 1rem 2.5rem; // top right bottom left
`;

export const contentContainer = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 2.5rem;
`;

export const actionContainer = (border: boolean, position: PositionType) => css`
    width: 100%;
    display: flex;
    justify-content: ${positionMap[position]};
    align-items: center;
    padding: 1.5rem 2rem;
    gap: 0.5rem;
    border-top: ${border ? `1px solid ${theme.colors.gray[300]}` : 0};
`;
