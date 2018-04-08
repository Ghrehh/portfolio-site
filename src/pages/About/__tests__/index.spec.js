import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import About from '../';

describe('About', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<About />);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
