import styled from '@emotion/styled'
import { mediaQueries, MediaQueryInput } from '@manskuy/breakpoints'

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

        ${mediaQueries({
            content: `
                min-height: 400px;
            `,
            breakpoints: MediaQueryInput.tabletAndUp
        })}

        ${mediaQueries({
            content: `
                min-height: 600px;
            `,
            breakpoints: MediaQueryInput.desktopAndUp
        })}
    }

    // When using items per row, ensure they are all equal height based on tallest column.
    &.equalHeightRows {
        grid-auto-rows: 1fr;
    }


`
