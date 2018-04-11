import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TransparentButton from '../';

describe('TransparentButton', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const component = (
      <TransparentButton onClick={() => {}} className="foo">
        FooBarBaz
      </TransparentButton>
    );

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
