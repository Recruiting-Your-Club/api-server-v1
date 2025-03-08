import { Avatar } from '@components/Avatar/Avatar';
import { Divider } from '@components/Divider';
import type { tagVariant } from '@components/Tag';
import { Tag } from '@components/Tag';
import { useRouter } from '@hooks/useRouter';
import React from 'react';
import type { AvatarShape, AvatarSize } from '../../Avatar';
import { CardBottomBody } from '../CardBottomBody';
import { CardFooter } from '../CardFooter';
import { CardRoot } from '../CardRoot';
import { CardTitleContainer } from '../CardTitleContainer';
import { CardTopBody } from '../CardTopBody';
import { statusTag } from './ClubCard.style';
import { TagList } from './TagList';

interface ClubCardProps {
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
    type: string;
    status: tagVariant;
    tag: string[];
    path: string;
}

const RECRUITMENT_STATUS: Record<tagVariant, string> = {
    primary: '모집예정',
    progress: '모집중',
    end: '모집마감',
};

function ClubCard({
    width = '33rem',
    radius = '0.3125rem',
    hover = true,
    avatarShape = 'square',
    avatarSize = 'xl',
    avatarRadius = '0.3125rem',
    titlePartPaddingLeft = '1.25rem',
    footerHeight = '3.3rem',
    imageURL,
    imageName,
    title,
    type,
    status,
    tag,
    path,
}: ClubCardProps) {
    // prop destruction

    // lib hooks
    const { goTo } = useRouter();

    // state, ref, querystring hooks
    // form hooks
    // query hooks
    // calculated values
    // effects
    // handlers

    return (
        <CardRoot width={width} radius={radius} hover={hover} onClick={() => goTo(path)}>
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
                    subTitle={type}
                />
                <div css={statusTag}>
                    <Tag text={RECRUITMENT_STATUS[status]} variant={status} />
                </div>
            </CardTopBody>
            <CardBottomBody />
            <Divider />
            <CardFooter footerHeight={footerHeight}>
                <TagList tag={tag} />
            </CardFooter>
        </CardRoot>
    );
}
export { ClubCard };
