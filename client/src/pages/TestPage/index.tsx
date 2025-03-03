import React from 'react';
import { Text } from '@components/Text';
function TestPage() {
    return (
        <>
            <Text type="h1Bold" color="primary">
                Test Page
            </Text>
            <Text as="h1" type="bodyRegular" color="black">
                Test Page
            </Text>
        </>
    );
}
export { TestPage };
