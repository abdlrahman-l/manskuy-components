import React from 'react';
import { HeaderWrapper } from './styles';

export const Header = ({ children, styles = {} }) => {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  );
};
