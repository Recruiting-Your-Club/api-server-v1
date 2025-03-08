import { Text } from '@components/Text';
import React from 'react';
import { titleContainer } from './Card.style';

interface CardTitleContainerProps {
    titlePartPaddingLeft?: string;
    title: string;
    subTitle: string;
}
function CardTitleContainer({ titlePartPaddingLeft, title, subTitle }: CardTitleContainerProps) {
    // prop destruction
    // lib hooks
    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers

    return (
        <div css={titleContainer(titlePartPaddingLeft)}>
            <Text as="span" textAlign="start" type="bodyBold" color="black" noWrap cropped>
                {title}
            </Text>
            <Text
                as="span"
                textAlign="start"
                type="subCaptionRegular"
                color="helper"
                noWrap
                cropped
            >
                {subTitle}
            </Text>
        </div>
    );
}

export { CardTitleContainer };
