import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Heading from '../';

describe('Heading', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    let component = <Heading className="foo">FooBarBaz</Heading>;

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
