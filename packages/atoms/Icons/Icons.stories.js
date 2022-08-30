import Column from '@manskuy/column';
import React from 'react';
import Row from '../Row/src';
import { HamburgerIcon } from './src/index';

export default {
  title: 'Icons',
};

export const IconsBasic = () => (
  <Row>
    <Column spans={[12,12,12]}>
      <HamburgerIcon />
    </Column>
  </Row>
);
