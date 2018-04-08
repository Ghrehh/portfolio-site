import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import Button from '../';

describe('Button', () => {
  let testContext = {};

  beforeEach(() => {
    testContext = {};
    testContext.onClickMock = jest.fn();
    testContext.component = (
      <Button onClick={testContext.onClickMock} className="foo">
        FooBarBaz
      </Button>
    );
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

  describe('onClick', () => {
    beforeEach(() => {
      const wrapper = shallow(testContext.component);
      wrapper.simulate('click');
    });

    it('renders the component correctly', () => {
      expect(testContext.onClickMock).toBeCalled();
    });
  });
});
