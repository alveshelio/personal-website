import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu from './Menu';

storiesOf('Menu', module)
  .add('default', () => (
    <Menu />
  ));
