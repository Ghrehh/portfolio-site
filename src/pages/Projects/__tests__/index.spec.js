import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Projects from '../';

describe('Projects', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const projects = [
      { name: 'foo', description: 'bar', backgroundColor: 'red' }
    ];

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<Projects projects={projects} />);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
