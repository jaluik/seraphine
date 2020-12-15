import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';

export type InputProps = React.InputHTMLAttributes<any>;

const prefix = 'seraphine-input';

const Input: FC<InputProps> = (props) => {
  const { className } = props;
  return <input className={classNames(className, prefix)} {...props} />;
};

Input.displayName = 'Input';

export default Input;
