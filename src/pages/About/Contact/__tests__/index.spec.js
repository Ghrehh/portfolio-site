import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Contact from '../';

describe('Contact', () => {
  let testContext = {};

  beforeEach(() => {
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<Contact />);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
