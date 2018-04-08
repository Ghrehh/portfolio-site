import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import PageHeading from '../';

describe('PageHeading', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const component = <PageHeading className="foo">FooBarBaz</PageHeading>;

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
