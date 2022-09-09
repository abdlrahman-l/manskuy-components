import React from 'react';
import { Header } from './src/index';
import useMediaQuery from '@manskuy/use-media-query/src';
import HeaderDrawer from './src/HeaderDrawer';
import styled from '@emotion/styled';
import { MediaQuery } from '@manskuy/breakpoints';

export default {
  title: 'Header',
};

const ExampleHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`

export const HeaderBasic = () => {
  const isMobileAndTab = !useMediaQuery('DesktopAndUp')
  
  return (
    <>
      <Header>
        {
          isMobileAndTab
          ? <HeaderDrawer>
            <ExampleHeaderContent>

              <a>test1</a>
              <a>test2</a>
            </ExampleHeaderContent>
          </HeaderDrawer>
          : null
        }
      </Header>
    </>
  )
}

