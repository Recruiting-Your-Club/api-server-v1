import { Text } from '@components/Text';
import React from 'react';

interface DescriptionTextProps {
    description: string;
}

function DescriptionText({ description }: DescriptionTextProps) {
    // prop destruction
    // lib hooks
    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers

    return (
        <>
            <Text as="span" textAlign="start" type="helperTextBold" color="subCaption">
                {description}
            </Text>
        </>
    );
}

export { DescriptionText };
