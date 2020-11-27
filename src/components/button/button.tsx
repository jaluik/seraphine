import React, { FC } from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<any>;

const Button: FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button {...props}>{children}</button>;
};

Button.displayName = 'Button';

export default Button;
