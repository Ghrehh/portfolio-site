import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Project from '../';

describe('Project', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    const component = (
      <Project match={{ params: { project: 'nsts-metronome' } }} />
    );

    testContext.renderer = new ShallowRenderer();
    testContext.renderer.render(component);
    testContext.result = testContext.renderer.getRenderOutput();
  });

  it('renders the component correctly', () => {
    expect(testContext.result).toMatchSnapshot();
  });
});
