import React from 'react';
import { MediaQueryInput, breakpointToMediaQuery } from './src/index';

export default {
  title: 'Breakpoints',
};

export const BreakpointsBasic = () => (
  <div>
    <h2>This is defined breakpoints that will be used across all my projects</h2>
    <b>
      {MediaQueryInput.desktopAndUp}: {breakpointToMediaQuery.DesktopAndUp}
    </b>
    <br/>
    <b>
      {MediaQueryInput.tabletAndUp}: {breakpointToMediaQuery.TabletAndUp}
    </b>
  </div>
);
