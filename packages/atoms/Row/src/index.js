import React from 'react';
import { useMediaQuery } from '@manskuy/hooks';

const Row = ({ children, styles = {} }) => {
  const isDesktop = useMediaQuery('DesktopAndUp')
  return (
    <div>
      {String(isDesktop)}
    </div>
  );
};

export default Row
