import React from 'react';
import Column from '@manskuy/column';
import Row from './src/index';

export default {
  title: 'Row',
};

export const RowBasic = () => (
  <Row gap='large'>
    <Column spans={[12, 6, 12]} alignSelf='center'>
      <p>test kiri</p>
    </Column>
    <Column spans={[12, 6, 12]}>
      <p>test kanan</p>
    </Column>
  </Row>
);
