import React from 'react';
import Button from '@components/button/button';
import Input from '@components/Input/input';

export default () => {
  return (
    <div>
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
      <div>
        <Input />
      </div>
    </div>
  );
};
