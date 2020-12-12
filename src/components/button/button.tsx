import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<any>, 'type'> & {
  type?: 'primary' | 'default' | 'error' | 'warn';
  size?: 'large' | 'middle' | 'small';
  htmlType?: 'submit' | 'reset' | 'button';
  shape?: 'round' | 'circle';
};

const prefix = 'seraphine-btn';

const Button: FC<ButtonProps> = (props) => {
  const { type, size, children, shape, htmlType, ...restProps } = props;
  return (
    <button
      className={classNames(prefix, {
        [`${prefix}-primary`]: type === 'primary',
        [`${prefix}-error`]: type === 'error',
        [`${prefix}-warn`]: type === 'warn',
        [`${prefix}-sm`]: size === 'small',
        [`${prefix}-lg`]: size === 'large',
        [`${prefix}-circle`]: shape === 'circle',
      })}
      type={htmlType}
      {...restProps}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  type: 'default',
  shape: 'round',
  size: 'middle',
};

export default Button;
