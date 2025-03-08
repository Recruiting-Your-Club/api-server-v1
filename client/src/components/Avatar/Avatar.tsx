import BasicImage from '@assets/images/basicImage.png';
import React from 'react';
import { s_shape, s_size } from './Avatar.style';

export type AvatarSize = 'xs' | 's' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'square' | 'round';

interface AvatarProps {
    shape?: AvatarShape;
    size?: AvatarSize;
    radius?: string;
    imageURL?: string;
    imageName?: string;
}

function Avatar({ shape = 'square', size = 'xl', radius, imageURL, imageName }: AvatarProps) {
    const cssProp = [s_size(size)];

    if (shape) cssProp.push(s_shape(shape, radius));

    return (
        <>
            <img
                src={imageURL ? imageURL : BasicImage}
                alt={imageName ? imageName : 'BasicImage'}
                css={cssProp}
            />
        </>
    );
}

export { Avatar };
