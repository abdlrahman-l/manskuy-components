import { cx } from 'emotion'
import { ColumnWrapper } from './styles'

// export type Span = 0|1|2|3|4|5|6|7|8|9|10|11|12

// export type Spans = readonly [Span, Span?, Span?]

// TODO Later need to move to global along with helper class if needed.
// export type SiteMargin = 'large' | 'medium' | 'none' | 'small'

// export type ColumnProps = {
//   /** Determines how a column will align itself (vertically) within any leftover space. Defaults to whatever Row alignItems has defined.  */
//   readonly alignSelf?: 'start' | 'stretch' | 'center' | 'end'
//   /** Sets the background color class. Expects a valid SiteColor value. */
//   readonly backgroundColor?: SiteColor
//   /** Content to be placed inside this Column. */
//   readonly children?: ReactNode
//   /** Determines if children of Column are height: 100%. Useful for grids of components that must be equal in height, such as cards. Defaults to false. */
//   readonly equalHeightChildren?: boolean
//   /** If columns are split into rows, this column will move to the top. Used for media to show up before text on mobile. */
//   readonly firstRow?: boolean
//   /** Sets if the column should have a minimum and maximum height. */
//   readonly height?: 'any' | 'fixed'
//   /** Determines how a column will align itself within any leftover space. Defaults to 'stretch'.  */
//   readonly justifySelf?: 'stretch' | 'center'
//   /** Left & Right Margin outside the column. */
//   readonly marginLeftRight?: SiteMargin
//   /** Padding inside the column. */
//   readonly padding?: SitePadding
//   /** Column spans out of 12 for mobile, tablet, and desktop. */
//   readonly spans?: Spans
//   /** Defines a box-shadow style. Expects a valid SiteShadow value. */
//   readonly shadow?: SiteShadow
//   /** data-component attribute value */
//   readonly dataComponent?: string
// }

const Column = ({
  alignSelf,
  backgroundColor,
  children,
  equalHeightChildren,
  marginLeftRight,
  padding,
  spans = [ 12 ],
  firstRow = false,
  height,
  justifySelf,
  shadow,
  dataComponent = Column.name
}) => {
  return (
    <ColumnWrapper className={cx(
        { [`mobile-${spans[0]}`]: !!spans[0] },
        { [`tablet-${spans[1]}`]: !!spans[1] },
        { [`desktop-${spans[2]}`]: !!spans[2] },
        { equalHeightChildren: equalHeightChildren },
        { ['alignSelfStart']: alignSelf === 'start' },
        { ['alignSelfCenter']: alignSelf === 'center' },
        { ['alignSelfStretch']: alignSelf === 'stretch' },
        { ['alignSelfEnd']: alignSelf === 'end' },
        { ['justifySelfCenter']: justifySelf === 'center' },
        { marginLeftRightLarge: marginLeftRight === 'large' },
        { ['paddingSmall']: padding === 'small' },
        { ['paddingMedium']: padding === 'medium' },
        { ['paddingLarge']: padding === 'large' },
        { fixedHeight: height === 'fixed' },
        { first: firstRow },
        { ['shadowSoft']: shadow === 'soft' },
        { ['shadowSoftBottom']: shadow === 'softBottom' },
        { ['shadowMedium']: shadow === 'medium' },
        { ['shadowStrong']: shadow === 'strong' }
      )}
      data-component={dataComponent}>
      {children}
    </ColumnWrapper>
  )
}

export default Column
