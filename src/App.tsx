import React from 'react';
import Button from '@components/button/button';

export default () => {
  return (
    <div>
      <Button size='small'>hello</Button>
      <Button size='middle'>hello</Button>
      <Button size='large' type='error'>
        hello
      </Button>
      <Button shape='circle' type='error'>
        hello
      </Button>
    </div>
  );
};
