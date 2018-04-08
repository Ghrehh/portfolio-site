import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Project from '../';

describe('Project', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const project = { name: 'foo', description: 'bar', backgroundColor: 'red' };

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(<Project project={project} />);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
