import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Page from '../';

describe('Page', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(
      <Page style={{ backgroundColor: 'blue' }}>
        <p>foo</p>
      </Page>
    );
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
