import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Resume from '../';

describe('Resume', () => {
  let testContext = {};

  beforeEach(() => {
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<Resume />);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
