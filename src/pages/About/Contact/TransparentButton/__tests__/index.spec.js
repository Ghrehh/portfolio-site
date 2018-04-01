import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TransparentButton from '../';

describe('TransparentButton', () => {
  let testContext = {};
  let component = (
    <TransparentButton className="foo">FooBarBaz</TransparentButton>
  );

  beforeEach(() => {
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
