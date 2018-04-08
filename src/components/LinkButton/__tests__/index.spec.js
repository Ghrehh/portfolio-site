import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import LinkButton from '../';

describe('LinkButton', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const component = <LinkButton link="./page">Foo</LinkButton>;

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
