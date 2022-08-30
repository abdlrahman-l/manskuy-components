import styled from '@emotion/styled'
import { mediaQueries, MediaQueryInput } from '@manskuy/breakpoints'


const clientType = [
    {
        className: 'mobile',
        breakpoint: MediaQueryInput.mobileOnly
    },
    {
        className: 'tablet',
        breakpoint: MediaQueryInput.tabletAndUp
    },
    {
        className: 'desktop',
        breakpoint: MediaQueryInput.desktopAndUp
    }
]

export const ColumnWrapper = styled.div`
    ${
        [...Array(13).keys()]
          .map(i => 
            clientType.map(type => `
                &.${type.className}-${i} {
                    ${
                       mediaQueries({
                            content: `
                            ${
                                i === 0
                                ? `
                                    grid-column: none;
                                    display: none;
                                `
                                : `grid-column: span ${i};`
                            }`,
                            breakpoints: type.breakpoint
                        })
                    }
                }
            `)
          )
    }

    &.first.mobile12 {
        ${mediaQueries({
            content: `grid-row: 1;`,
            breakpoints: MediaQueryInput.mobileOnly
        })}
    }


    // This is to enable scrolling text inside a column.
    &.fixedHeight {
        height: 350px;
        overflow-x: hidden;
        overflow-y: scroll;

        ${mediaQueries({
            content: `height: 400px;`,
            breakpoints: MediaQueryInput.tabletAndUp
        })}

        ${mediaQueries({
            content: `height: 600px;`,
            breakpoints: MediaQueryInput.desktopAndUp
        })}
    }

    // Useful for when components inside the Column should be equal height, such as
    // a grid of cards.
    &.equalHeightChildren {
        // To have children all equal in height, the columns must stretch to fill the
        // height of each grid track. This overrides the scenario where grid container
        // is set to align-items: center, which collapses height of children to its
        // contents. align-self: stretch restores the behavior to fill the row.
        align-self: stretch;

        // Make the component inside the column as tall as the row as well.
        > * {
            height: 100%;
        }
    }


    // Flexbox/grid helper classes.
    &.justifySelfCenter {
        justify-self: center;
    }

    &.alignSelfStart {
        align-self: start;
    }

    &.alignSelfStretch {
        align-self: stretch;
    }

    &.alignSelfCenter {
        align-self: center;
    }

    &.alignSelfEnd {
        align-self: end;
    }
      
`