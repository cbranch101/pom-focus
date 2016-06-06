import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InfoBox from '../components/InfoBox.js'
import WithMUI from '../components/WithMUI'

storiesOf('Timer', module)
  .addDecorator(WithMUI)
  .add('basic', () => (
    <InfoBox />
  ))
