import { Tag } from '@components/Tag';
import React, { useEffect, useRef, useState } from 'react';
import { invisibleTag, line, perTag, tagDisplay } from './ClubCard.style';

interface ClubCardFooterProps {
    tag: string[];
}

function ClubCardFooter({ tag }: ClubCardFooterProps) {
    const visibleRef = useRef<HTMLDivElement | null>(null);
    const invisibleRef = useRef<HTMLDivElement | null>(null);
    const [visibleTag, setVisibleTag] = useState<string[]>([]);
    const [isMeasuring, setIsMeasuring] = useState(true);

    useEffect(() => {
        if (!visibleRef.current || !invisibleRef.current) return;

        const cardWidth = visibleRef.current.clientWidth;
        let currentTagsWidth = 0;
        const newVisibleTag: string[] = [];

        const tagElements = Array.from(invisibleRef.current.children) as HTMLDivElement[];
        tagElements.forEach((tagElement, index) => {
            const tagWidth = tagElement.offsetWidth;
            if (currentTagsWidth + tagWidth <= cardWidth) {
                newVisibleTag.push(tag[index]);
                currentTagsWidth += tagWidth;
            }
        });
        setVisibleTag(newVisibleTag);
        setIsMeasuring(false);
    }, [tag]);

    return (
        <div>
            <hr css={line} />
            <div ref={visibleRef} css={tagDisplay}>
                {visibleTag.map((tag, index) => (
                    <span key={index} css={perTag}>
                        <Tag text={tag} variant="primary" />
                    </span>
                ))}
            </div>
            {isMeasuring && (
                <div ref={invisibleRef} css={invisibleTag} aria-hidden="true">
                    {tag.map((tag, index) => (
                        <Tag key={index} text={tag} variant="primary" />
                    ))}
                </div>
            )}
        </div>
    );
}

export { ClubCardFooter };
