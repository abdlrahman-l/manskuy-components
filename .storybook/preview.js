import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import React, { Component } from 'react';

class Wrapper extends Component {

  render() {
    return (
      <>
        {/* {globalStyles} */}
        {this.props.children}
      </>
    );
  }
};

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
