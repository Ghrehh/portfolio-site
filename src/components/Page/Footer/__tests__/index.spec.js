import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Footer from '../';

describe('Footer', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<Footer />);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
