import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@components/button/button';

it('should have class ', () => {
  render(<Button type='primary'>hello</Button>);
  expect(screen.getByText('hello')).toHaveClass('seraphine-btn-primary');
});
