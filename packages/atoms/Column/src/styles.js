import styled from '@emotion/styled'
import { MediaQuery, MediaQueryInput } from '@manskuy/breakpoints'


const [desktop, tablet, mobile] = Object.keys(MediaQueryInput)
const clientType = [
    {
        className: 'mobile',
        breakpoint: mobile
    },
    {
        className: 'tablet',
        breakpoint: tablet
    },
    {
        className: 'desktop',
        breakpoint: desktop
    }
]


export const ColumnWrapper = styled.div`
    ${
        [...Array(13).keys()]
          .map(i => 
            clientType.map(type => `
                &.${type.className}-${i} {
                    ${
                       MediaQuery[type.breakpoint](
                        i === 0
                            ? `
                                grid-column: none;
                                display: none;
                            `
                            : `grid-column: span ${i};`
                        )
                    }
                }
            `)
          )
    }

    &.first.mobile12 {
        ${MediaQuery.mobileOnly('grid-row: 1;')}
    }


    // This is to enable scrolling text inside a column.
    &.fixedHeight {
        height: 350px;
        overflow-x: hidden;
        overflow-y: scroll;

        ${MediaQuery.tabletAndUp('height: 400px;')}

        ${MediaQuery.desktopAndUp('height: 600px;')}
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