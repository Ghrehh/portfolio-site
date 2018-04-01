import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Button from '../';

describe('Button', () => {
  let testContext = {};
  let component = <Button className="foo">FooBarBaz</Button>;

  beforeEach(() => {
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
