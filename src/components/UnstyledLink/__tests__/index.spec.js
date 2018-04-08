import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import UnstyledLink from '../';

jest.mock('react-router-dom', () => ({ Link: 'div' }));

describe('UnstyledLink', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    testContext.component = <UnstyledLink link="./page">Foo</UnstyledLink>;
  });

  describe('rendering', () => {
    beforeEach(() => {
      testContext.renderer = new ShallowRenderer();
      testContext.renderer.render(testContext.component);
      testContext.result = testContext.renderer.getRenderOutput();
    });

    it('renders the component correctly', () => {
      expect(testContext.result).toMatchSnapshot();
    });
  });
});
