import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import { lorem } from "faker";
import { times } from "lodash";

storiesOf('Button', module)
  .add('with text', withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    ))
  )
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

const opts = times(5, () => lorem.sentence())

storiesOf('Dropdown', module)
  .add('standard', () => (
    <Dropdown options={opts} />
  ))
  .add('HTML select', () => (
    <select>{opts.map(o =><option>{o}</option>)}</select> 
  ))
