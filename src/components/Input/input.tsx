import React, { FC } from 'react';

export type InputProps = React.InputHTMLAttributes<any>;

const Input: FC<InputProps> = (props) => {
  return <input {...props} />;
};

Input.displayName = 'Input';

export default Input;
