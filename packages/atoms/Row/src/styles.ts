import styled from '@emotion/styled'
import { MediaQuery } from '@manskuy/breakpoints'

export const RowWrapper = styled.div`

    align-items: center;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(12, 1fr);

    // Vertical-alignment configuration classes.
    &.alignItemsStretch {
      align-items: stretch;
    }
  
    &.alignItemsCenter {
      align-items: center;
    }


    // Height configuration classes.
    &.standardHeight {
        min-height: 600px;
    }

    &.fullHeight {
        height: 100%;
    }

    &.responsiveHeight {
        height: 100%;
        min-height: 350px;

        ${MediaQuery.tabletAndUp('min-height: 400px')}

        ${MediaQuery.desktopAndUp('min-height: 600px;')}
    }

    // When using items per row, ensure they are all equal height based on tallest column.
    &.equalHeightRows {
        grid-auto-rows: 1fr;
    }


    // Gap configuration classes.
    &.gapNone {
        gap: 0;
    }

    &.gapSmall,
    &.gapMedium,
    &.gapLarge {
        gap: 16px;
    }

    &.gapMedium {
        ${MediaQuery.tabletAndUp('gap: 32px')}
        ${MediaQuery.desktopAndUp('gap: 32px')}
    }

    &.gapLarge {
        ${MediaQuery.tabletAndUp('gap: 64px')}
        ${MediaQuery.desktopAndUp('gap: 64px')}
    }
`
