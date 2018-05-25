import * as React from 'react';
import  SampleWidget  from '../src/widget';
import { storiesOf } from '@storybook/react';

storiesOf("App", module)
  .add('app', () => <SampleWidget name="Michael" />);
