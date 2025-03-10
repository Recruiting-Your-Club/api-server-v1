import { Divider } from '@components/Divider';
import React from 'react';
import type { AvatarShape, AvatarSize } from '../Avatar';
import { Avatar } from '../Avatar';
import { CardBottomBody } from './CardBottomBody';
import { CardFooter } from './CardFooter';
import { CardRoot } from './CardRoot';
import { CardTitleContainer } from './CardTitleContainer';
import { CardTopBody } from './CardTopBody';
import { DescriptionText } from './DescriptionText';

interface CardProps {
    width?: string;
    radius?: string;
    hover?: boolean;
    avatarShape?: AvatarShape;
    avatarSize?: AvatarSize;
    avatarRadius?: string;
    titlePartPaddingLeft?: string;
    footerHeight?: string;
    imageURL?: string;
    imageName?: string;
    title: string;
    subTitle: string;
    description: string;
}

function Card({
    width,
    radius,
    hover,
    avatarShape = 'square',
    avatarSize = 'xl',
    avatarRadius = '0.3125rem',
    titlePartPaddingLeft = '1.25rem',
    footerHeight,
    imageURL,
    imageName,
    title,
    subTitle,
    description,
}: CardProps) {
    // prop destruction
    // lib hooks
    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers

    return (
        <CardRoot width={width} radius={radius} hover={hover}>
            <CardTopBody>
                <Avatar
                    shape={avatarShape}
                    size={avatarSize}
                    radius={avatarRadius}
                    imageURL={imageURL}
                    imageName={imageName}
                />
                <CardTitleContainer
                    titlePartPaddingLeft={titlePartPaddingLeft}
                    title={title}
                    subTitle={subTitle}
                />
            </CardTopBody>
            <CardBottomBody>
                <DescriptionText description={description} />
            </CardBottomBody>
            <Divider />
            <CardFooter footerHeight={footerHeight} />
        </CardRoot>
    );
}
export { Card };
