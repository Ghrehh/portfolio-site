import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ButtonContainer from '../';

describe('ButtonContainer', () => {
  let testContext = {};
  let component = (
    <ButtonContainer>
      <p>foo</p>
      <p>bar</p>
    </ButtonContainer>
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
