import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

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

storiesOf('Dropdown', module)
  .add('standard', () => (
    <Dropdown options={["a", "b", "c", "d", "e"]} />
  ))
