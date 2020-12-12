import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@components/button/button';

const btn_prefix = 'seraphine-btn';

describe('it should render right classNames', () => {
  it('should have default class', () => {
    render(<Button>default</Button>);
    expect(screen.getByText('default')).toHaveClass(`${btn_prefix}`);
  });
  it('should have primary class', () => {
    render(<Button type='primary'>primary</Button>);
    expect(screen.getByText('primary')).toHaveClass(`${btn_prefix}-primary`);
  });
  it('should have warn class', () => {
    render(<Button type='warn'>warn</Button>);
    expect(screen.getByText('warn')).toHaveClass(`${btn_prefix}-warn`);
  });
  it('should have circle class', () => {
    render(<Button shape='circle'>circle</Button>);
    expect(screen.getByText('circle')).toHaveClass(`${btn_prefix}-circle`);
  });
});
