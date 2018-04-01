import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import SubHeading from '../';

describe('SubHeading', () => {
  let testContext = {};
  let component = (
    <SubHeading className='foo'>
      FooBarBaz
    </SubHeading>
  )

  beforeEach(() => {
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
