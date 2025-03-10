import type { CSSProperties } from 'react';

type FontWeightKey = 'bold' | 'semibold' | 'regular' | 'light';
const FontWeight: Record<FontWeightKey, CSSProperties['fontWeight']> = {
    bold: 700,
    semibold: 500,
    regular: 400,
    light: 300,
};

const TYPOGRAPHY = {
    //display
    displayBold: {
        fontSize: '8.4rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.5',
    },
    //h1
    h1Bold: {
        fontSize: '3.2rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.5',
    },
    h1Semibold: {
        fontSize: '3.2rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1.5',
    },
    h1Light: {
        fontSize: '3.2rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1.5',
    },
    //h2
    h2Bold: {
        fontSize: '2.8rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.5',
    },
    h2Semibold: {
        fontSize: '2.8rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1.5',
    },
    h2Light: {
        fontSize: '2.8rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1.5',
    },
    //h3
    h3Bold: {
        fontSize: '2.4rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.5',
    },
    h3Semibold: {
        fontSize: '2.4rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1.5',
    },
    h3Light: {
        fontSize: '2.4rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1.5',
    },
    //h4
    h4Bold: {
        fontSize: '2rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.5',
    },
    h4Semibold: {
        fontSize: '2rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1.5',
    },
    h4Light: {
        fontSize: '2rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1.5',
    },
    //body
    bodyBold: {
        fontSize: '1.6rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.5',
    },
    bodySemibold: {
        fontSize: '1.6rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1.5',
    },
    bodyRegular: {
        fontSize: '1.6rem',
        fontWeight: FontWeight['regular'],
        lineHeight: '1.5',
    },
    bodyLight: {
        fontSize: '1.6rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1.5',
    },
    //caption
    captionBold: {
        fontSize: '1.4rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.3',
    },
    captionSemibold: {
        fontSize: '1.4rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1.3',
    },
    captionRegular: {
        fontSize: '1.4rem',
        fontWeight: FontWeight['regular'],
        lineHeight: '1.3',
    },
    captionLight: {
        fontSize: '1.4rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1.3',
    },
    //subCaption
    subCaptionBold: {
        fontSize: '1.2rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1.2',
    },
    subCaptionSemibold: {
        fontSize: '1.2rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1.2',
    },
    subCaptionRegular: {
        fontSize: '1.2rem',
        fontWeight: FontWeight['regular'],
        lineHeight: '1.2',
    },
    subCaptionLight: {
        fontSize: '1.2rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1.2',
    },
    //helperText
    helperTextBold: {
        fontSize: '1rem',
        fontWeight: FontWeight['bold'],
        lineHeight: '1',
    },
    helperTextSemibold: {
        fontSize: '1rem',
        fontWeight: FontWeight['semibold'],
        lineHeight: '1',
    },
    helperTextRegular: {
        fontSize: '1rem',
        fontWeight: FontWeight['regular'],
        lineHeight: '1',
    },
    helperTextLight: {
        fontSize: '1rem',
        fontWeight: FontWeight['light'],
        lineHeight: '1',
    },
} as const;

export { TYPOGRAPHY };
