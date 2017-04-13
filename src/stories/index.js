import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Characteristic from '../components/Characteristic';
import Characteristics from '../components/Characteristics';

storiesOf('Characteristic', module)
  .add('without unnatural', () => (
    <Characteristic name='WS' value={25}/>
  ))
  .add('with unnatural(+4)', () => (
    <Characteristic name='WS' value={25} unnat={4}/>
  ));

storiesOf('Characteristics', module)
  .add('example', () => (
    <Characteristics characteristics={[
      {
        name: 'WS',
        value: 25
      }, {
        name: 'BS',
        value: 25
      }, {
        name: 'S',
        value: 25
      }, {
        name: 'T',
        value: 25
      }, {
        name: 'Agi',
        value: 25,
        unnat: 6
      }, {
        name: 'Per',
        value: 25,
        unnat: 6
      }, {
        name: 'Int',
        value: 25
      }, {
        name: 'WP',
        value: 25
      }, {
        name: 'Fel',
        value: 25,
        unnat: 6
      }, {
        name: 'Cor',
        value: 25
      }, {
        name: 'Inf',
        value: 25
      }]}/>
  ));