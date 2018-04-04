import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'index.module.css';

import Button from 'components/Button';
import ButtonContainer from 'components/ButtonContainer';
import Heading from 'components/Heading';

storiesOf('Components/Buttons', module)
  .add('<Button />', () => <Button>Button</Button>)
  .add('<ButtonContainer />', () => (
    <ButtonContainer>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonContainer>
  ))

storiesOf('Components/Text', module)
  .add('<Heading />', () => (
    <Heading>This is a heading with some cool text of a decent length</Heading>)
  );
