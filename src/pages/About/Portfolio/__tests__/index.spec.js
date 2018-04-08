import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Portfolio from '../';

describe('Portfolio', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<Portfolio />);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
