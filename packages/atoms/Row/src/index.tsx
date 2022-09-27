import { Maybe } from 'monet'
import React, { FC, ReactNode, useMemo } from 'react'

import { cx } from '@emotion/css'
import useMediaQuery from '@manskuy/use-media-query'

import { RowWrapper } from './styles'

const firstRow = (col) => col?.props?.firstRow

export const spans12onMobile = (col)  =>
  Maybe.fromUndefined(col?.props?.span)
    .map(v => v[0])
    .map((val) => val === 12)
    .cata(
      () => false,
      (i) => i
    )

export const columnShouldBeFirst = (col) =>
  spans12onMobile(col) && firstRow(col)

export const moveFirstToTop = (children) =>
  Array.isArray(children) ?
    children.reduce((acc, item) =>
      columnShouldBeFirst(item)
        ? [ item, ...acc ]
        : [ ...acc, item ]
    , [])
    : children

export type HeightTypes = 'any' | 'full' | 'responsive' | 'standard'
export type SiteGridGap = 'large' | 'medium' | 'none' | 'small'

export type RowProps = {
  /** Defaults to 'center' if undefined. Supports stretch and center. */
  readonly alignItems?: 'center' | 'stretch'
  /** A Function Component that accepts any props and will replace the row's div */
  // readonly BackgroundComponent?: BackgroundComponentType
  /** The row's background color */
  // readonly backgroundColor?: SiteColor
  /** Props that are passed to the BackgroundComponent */
  readonly backgroundComponentProps?: Record<string, unknown>
  /** The contents of the row */
  readonly children: ReactNode
  /** data-component attribute value */
  readonly dataComponent?: string
  /** Whether to show divider lines between columns */
  readonly divider?: boolean
  /** If multiple rows, determines if the heights of the rows should be equal. Useful for making grid items equal in height. */
  readonly equalHeightRows?: boolean
  /** Grid gap between columns. Leave empty (undefined) for responsive defaults. Choose 'none' to remove the grid gap. */
  readonly gap?: SiteGridGap
  /** The height constraints of the row */
  readonly height?: HeightTypes
  /** Unique HTML id to pass to the parent div */
  readonly id?: string
  /** Padding on the inside of the row */
  // readonly padding?: SitePadding
  /** Color of the text inside the row */
  // readonly textColor?: SiteColor
  /** Changes body copy/paragraph size to be either 'xs' (12px), 'sm' (14px), or 'md' (16/18px; the default setting). */
  readonly textSize?: 'md' | 'sm' | 'xs'
}

const Row: FC<RowProps> =
    ({
      alignItems,
      // BackgroundComponent,
      // backgroundColor = 'none',
      backgroundComponentProps,
      children,
      dataComponent = Row.name,
      // divider, 
      equalHeightRows,
      gap,
      height = 'any',
      id,
      // padding
    }) => {

      /**
     * This is for a11y.
       *
       * The .first class sets a column to be on top when the columns switch over to rows.
       * This produces the correct result, but changing the structure through css causes issues with screen readers.
       * The css class is enough to produce the expected results on first render (or gatsby build), and this will actually move the first row to the top.
       * This produces the correct markup, and since the item is already in the same spot through CSS this change doesn't cause any visible change.
       */

      const isTabletOrUp = useMediaQuery('TabletAndUp')
      const nodes = useMemo(() =>
        isTabletOrUp === false
          ? moveFirstToTop(children)
          : children, [ children, isTabletOrUp ])

      return <RowWrapper className={
          cx(
              { gapNone: gap === 'none' },
              { gapSmall: gap === 'small' },
              { gapMedium: gap === 'medium' },
              { gapLarge: gap === 'large' },
              { equalHeightRows: equalHeightRows },
              { standardHeight: height === 'standard' },
              { fullHeight: height === 'full' },
              { alignItemsCenter: alignItems === 'center' },
              { alignItemsStretch: alignItems === 'stretch' },
            )
        }
      >
        {nodes}
      </RowWrapper>
    }

export default Row
