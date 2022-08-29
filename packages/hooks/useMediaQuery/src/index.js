import { Maybe } from 'monet'
import { useEffect, useRef, useState } from 'react'

export const MediaQueryInput = {
    desktopAndUp: 'DesktopAndUp',
    tabletAndUp: 'TabletAndUp'
}

export const breakpointToMediaQuery = {
  DesktopAndUp: '(min-width: 1240px)',
  TabletAndUp: '(min-width: 768px)'
}

export default function useMediaQuery(query, defaultValue = false) {
  // For proper hydration, we want to make sure the initial value returned by this hook in SSR matches the initial value
  // when this is run client-side, so we start off with the default value.
  // Recommended default value is false, so that when this runs in the browser the smaller devices will not have to
  // re-render as `matches` will still be false once the browser does the matchMedia check.
  const [ matches, setMatch ] = useState(defaultValue)

  // All our supported browsers support matchMedia; this is just for SSR & our test env (jsdom)
  const isMatchMediaSupported = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'

  const active = useRef(false)

  useEffect(() => {
    const effect =
      Maybe
        .fromFalsy(isMatchMediaSupported)
        .map(() => {
          // Since this function is in a Just, none of this will run if isMatchMediaSupported is false

          const mediaQueryList = window.matchMedia(breakpointToMediaQuery[query])

          // Safari has a bug where queued listeners don't always get cleaned up by removeListener. The workaround is
          // using this 'active' flag so we can make sure setMatch won't get called after this effect is cleaned up
          // Description of issue: https://github.com/ReactTraining/react-media/issues/100#issuecomment-423407762
          const updateMatch = () => active.current && setMatch(mediaQueryList.matches)

          // This is returning an object with two functions to avoid causing effects inside the Maybe
          return {

            activate: () => {
              active.current = true

              updateMatch()
              // using "deprecated" addListener & removeListener because Safari < 14 doesn't support new addEventListener
              mediaQueryList.addListener(updateMatch)
            },
            deactivate: () => {
              active.current = false
              mediaQueryList.removeListener(updateMatch)
            }
          }
        })

    effect.forEach(e => e.activate())

    return effect.map(e => e.deactivate).orUndefined()

  }, [ query, isMatchMediaSupported ])

  return matches
}