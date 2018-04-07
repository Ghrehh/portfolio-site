import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Card from '../';

describe('Card', () => {
  let testContext = {};
  let component = (
    <Card>
      <p>Foo</p>
      <p>bar</p>
    </Card>
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
