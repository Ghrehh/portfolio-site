import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Page from '../';

describe('Page', () => {
  let testContext = {};
  const children = <p>foo</p>;

  beforeEach(() => {
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<Page>{children}</Page>);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});