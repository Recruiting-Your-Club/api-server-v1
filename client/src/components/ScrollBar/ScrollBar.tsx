import React from "react";
import type { ReactNode } from 'react';
import { css } from '@emotion/react';
import { scrollBarStyle } from './ScrollBar.style';

interface ScrollBarProps {
  children: ReactNode;
  height?: string;
  maxHeight?: string;
}

function ScrollBar({ children, height, maxHeight }: ScrollBarProps) {
  return (
    <div
      css={css`
        ${scrollBarStyle};
        height: ${height};
        max-height: ${maxHeight};
      `}
    >
      {children}
    </div>
  );
}

export { ScrollBar };