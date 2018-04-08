import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import LinkButton from '../';

jest.mock('react-router-dom', () => ({ Link: 'div' }));

describe('LinkButton', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};

    testContext.component = <LinkButton link="./page">Foo</LinkButton>;
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
