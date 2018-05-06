import * as React from 'react';
import  SampleWidget  from '../src/widget';
import  Wakka  from '../src/wakka';
import  Black  from '../src/black';
import { storiesOf } from '@storybook/react';

storiesOf("App", module)
  .add('app', () => <SampleWidget name="Michael" />);

storiesOf("Wakka", module)
  .add('wakka', () => <Wakka />);

storiesOf("Black", module)
  .add('Woo hoo', () => <Black />);