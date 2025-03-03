import '@emotion/react';

import type { COLORS } from '@styles/theme/colors';
import type { TYPOGRAPHY } from '@styles/theme/typography';

declare module '@emotion/react' {
    export interface Theme {
        colors: typeof COLORS;
        typography: typeof TYPOGRAPHY;
    }
}
