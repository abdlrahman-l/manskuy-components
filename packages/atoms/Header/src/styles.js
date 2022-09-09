import styled from "@emotion/styled";
import { MediaQuery } from "@manskuy/breakpoints";
import { keyframes } from "@emotion/css";

const transitionAnimation = (axis, from = '-100%') => keyframes`
  from {
    transform: translate${axis}(${from});
    opacity: 0;
  }
  to {
    transform: translate${axis}(0);
    opacity: 1;
  }
`

export const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    margin: 0;
    flex-direction: row;
    align-items: start;
    padding: 8px 12px;
    background-color: red;
    position: relative;
    animation: ${transitionAnimation('Y')} 0.6s; 

    ${MediaQuery.tabletAndUp('padding: 12px 32px;')}
`

export const HeaderDrawerWrapper = styled.div`
  position: relative;
  height: 100%;
  justify-content: end;
  display: flex;
`

export const HeaderNavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0;
  animation: ${transitionAnimation('X')} 0.6s;
  flex-grow: 1;

  .icon {
    align-self: start;
  }
  
`