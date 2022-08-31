export const breakpointToMediaQuery = {
  DesktopAndUp: '(min-width: 1240px)',
  TabletAndUp: '(min-width: 768px)',
  MobileOnly: '(max-width: 767px)'
}

export const MediaQueryInput = {
  desktopAndUp: 'DesktopAndUp',
  tabletAndUp: 'TabletAndUp',
  mobileOnly: 'MobileOnly'
}

export const mediaQueries = breakpoint => content =>`
  @media ${breakpoint} {
    ${content}
  }
`

export const MediaQuery = {
  desktopAndUp: mediaQueries(breakpointToMediaQuery.DesktopAndUp),
  tabletAndUp: mediaQueries(breakpointToMediaQuery.TabletAndUp),
  mobileOnly: mediaQueries(breakpointToMediaQuery.MobileOnly)
}