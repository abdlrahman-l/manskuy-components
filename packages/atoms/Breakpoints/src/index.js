export const breakpointToMediaQuery = {
  DesktopAndUp: '(min-width: 1240px)',
  TabletAndUp: '(min-width: 768px)'
}

export const MediaQueryInput = {
  desktopAndUp: 'DesktopAndUp',
  tabletAndUp: 'TabletAndUp'
}

export const mediaQueries = ({ content, breakpoints }) => `
  @media ${breakpointToMediaQuery[breakpoints]} {
    ${content}
  }
`