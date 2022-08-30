import React from 'react';
import Column from '@manskuy/column';
import Row from './src/index';

export default {
  title: 'Row',
};

export const RowBasic = () => (
  <Row>
    <Column spans={[12, 6, 6]} alignSelf='center'>
      <p>test kiri</p>
    </Column>
    <Column spans={[12, 6, 6]}>
      <p>test kanan</p>
    </Column>
  </Row>
);
