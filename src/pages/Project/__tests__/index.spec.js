import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Project from '../';

describe('Project', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const projects = {
      'cool-project': {
        name: 'foo',
        description: 'bar',
        backgroundColor: 'red'
      }
    };

    const component = (
      <Project
        projects={projects}
        match={{ params: { project: 'cool-project' } }}
      />
    );

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
