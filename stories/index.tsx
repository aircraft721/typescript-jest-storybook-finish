import * as React from 'react';
import { SampleWidget } from '../src/widget';
import { Wakka } from '../src/wakka';
import { storiesOf } from '@storybook/react';

storiesOf("App", module)
  .add('app', () => <SampleWidget name="Michael" />);

storiesOf("Wakka", module)
  .add('wakka', () => <Wakka />);