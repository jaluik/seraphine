import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';

export type ButtonProps = React.ButtonHTMLAttributes<any> & {
  type?: 'primary' | 'default' | 'error';
};

const prefix = 'seraphine-btn';

const Button: FC<ButtonProps> = (props) => {
  const { type, children } = props;
  return (
    <button
      className={classNames(prefix, {
        [`${prefix}-primary`]: type === 'primary',
        [`${prefix}-error`]: type === 'error',
      })}
      {...props}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
