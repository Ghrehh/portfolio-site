import React from 'react';

import { storiesOf } from '@storybook/react';

import Page from 'components/Page';
import Card from 'components/Card';
import Button from 'components/Button';
import ButtonContainer from 'components/ButtonContainer';
import PageHeading from 'components/text/PageHeading';
import SectionHeading from 'components/text/SectionHeading';

import 'reset-css';
import 'index.module.css';

const ipsum = (
  <p>
    This is the default paragraph style. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.
  </p>
);

storiesOf('Display', module)
  .add('<Page />', () => (
    <Page>
      <PageHeading>A Page Heading</PageHeading>
      <div
        style={{
          maxWidth: '500px',
          paddingBottom: '60px',
          textAlign: 'center',
          margin: 'auto'
        }}
      >
        <SectionHeading>A Section Heading</SectionHeading>
        {ipsum}
      </div>
    </Page>
  ))
  .add('<Card />', () => (
    <Card>
      <SectionHeading>A Section Heading</SectionHeading>
      {ipsum}
    </Card>
  ));

storiesOf('Buttons', module)
  .add('<Button />', () => <Button>Button</Button>)
  .add('<ButtonContainer />', () => (
    <ButtonContainer>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonContainer>
  ));

storiesOf('Text', module)
  .add('<PageHeading />', () => (
    <PageHeading>This is the Heading Used At the Top Of Pages</PageHeading>
  ))
  .add('<SectionHeading />', () => (
    <SectionHeading>
      This is the heading Used at the Top of Sections
    </SectionHeading>
  ))
  .add('<p />', () => ipsum);
