import React, { useState } from 'react';
import type { SerializedStyles } from '@emotion/react';
import type { StarSize } from './Star';
import { Star } from './Star';
import { ratingContainer } from './Rating.style';

const TOTAL_STARS_DEFAULT = 5;

export interface RatingProps {
    value?: number;
    size?: StarSize;
    totalStars?: number;
    type?: 'click' | 'display';
    onChange?: (rating: number) => void;
    customCSS?: SerializedStyles;
}

export function Rating({
    value = 0,
    size,
    totalStars = TOTAL_STARS_DEFAULT,
    type = 'click',
    onChange,
    customCSS,
}: RatingProps) {
    const [hoverRating, setHoverRating] = useState<number | null>(value);
    const [rating, setRating] = useState<number>(value);

    const handleClick = (index: number) => {
        if (type === 'display') return;

        setRating(index);
        onChange?.(index);
    };

    const handleMouseEnter = (index: number) => {
        if (type === 'display') return;

        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        if (type === 'display') return;

        setHoverRating(null);
    };

    return (
        <div css={[ratingContainer, customCSS]}>
            {Array.from({ length: totalStars }, (_, index) => {
                const starIndex = index + 1;
                const isFilled = (hoverRating || rating) >= starIndex;
                const partialFill = (hoverRating || rating) - starIndex + 1;

                return (
                    <Star
                        key={starIndex}
                        filled={isFilled}
                        partialFill={partialFill}
                        size={size ?? 'md'}
                        onClick={() => handleClick(starIndex)}
                        onMouseEnter={() => handleMouseEnter(starIndex)}
                        onMouseLeave={handleMouseLeave}
                    />
                );
            })}
        </div>
    );
}
