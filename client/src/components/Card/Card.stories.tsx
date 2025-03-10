import { Avatar } from '@components/Avatar';
import { Divider } from '@components/Divider';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { CardBottomBody } from './CardBottomBody';
import { CardFooter } from './CardFooter';
import { CardRoot } from './CardRoot';
import { Card } from './CardTest';
import { CardTitleContainer } from './CardTitleContainer';
import { CardTopBody } from './CardTopBody';
import { TagList } from './ClubCard/TagList';
import { DescriptionText } from './DescriptionText';

const meta: Meta<typeof Card> = {
    title: '기본카드',
    component: Card,
    parameters: {
        docs: {
            description: {
                component: '카드 컴포넌트입니다.',
            },
        },
    },
};

export default meta;
type Story = StoryFn<typeof Card>;

const PrimaryTemplate: Story = ({
    width = '30rem',
    radius = '0.3125rem',
    hover,
    titlePartPaddingLeft,
    footerHeight = '3.75rem',
    title = 'EN#(Enjoy C#)',
    subTitle = '학술동아리',
    description = '모집기간 : 2025.01.25 - 2025.01.26',
}) => {
    return (
        <CardRoot width={width} radius={radius} hover={hover}>
            <CardTopBody>
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
            <CardFooter footerHeight={footerHeight}>
                <TagList tag={['코딩', '프로그래밍', 'IT']} />
            </CardFooter>
        </CardRoot>
    );
};

export const Primary = PrimaryTemplate.bind({});

export const PrimaryHover = PrimaryTemplate.bind({});
PrimaryHover.args = {
    hover: true,
};

const AvatarTemplate: Story = ({
    width = '30rem',
    radius = '0.3125rem',
    hover,
    avatarShape,
    avatarSize = 'xl',
    avatarRadius = '0.3125rem',
    titlePartPaddingLeft,
    footerHeight = '3.75rem',
    imageURL,
    imageName,
    title = 'EN#(Enjoy C#)',
    subTitle = '학술동아리',
    description = '모집기간 : 2025.01.25 - 2025.01.26',
}) => {
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
            <CardFooter footerHeight={footerHeight}>
                <TagList tag={['코딩', '프로그래밍', 'IT']} />
            </CardFooter>
        </CardRoot>
    );
};

export const AvatarAdded = AvatarTemplate.bind({});
AvatarAdded.args = {
    hover: true,
    titlePartPaddingLeft: '1.25rem',
    avatarShape: 'square',
};

const NoDividerTemplate: Story = ({
    width = '23rem',
    radius = '0.3125rem',
    hover,
    avatarShape,
    avatarSize = 'xl',
    avatarRadius = '0.3125rem',
    titlePartPaddingLeft,
    imageURL,
    imageName,
    title = 'EN#(Enjoy C#)',
    subTitle = '학술동아리',
    description = '💡 IT 동아리 EN# 신규 멤버 모집! 💡\n 코딩, 개발, 협업에 관심 있는 분들을 찾습니다.\n 함께 배우고 성장하며 멋진 프로젝트를 만들어봐요!\n 경험이 없어도 환영합니다. 지금 함께하세요! 🚀💻',
}) => {
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
        </CardRoot>
    );
};

export const NoDivider = NoDividerTemplate.bind({});
NoDivider.args = {
    hover: true,
    titlePartPaddingLeft: '1.25rem',
    avatarShape: 'square',
};
