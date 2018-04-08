import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Card from '../';

describe('Card', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const component = (
      <Card className="foo">
        <p>Foo</p>
        <p>bar</p>
      </Card>
    );
    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
