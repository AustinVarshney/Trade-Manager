import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from '../src/components/Menu';
import '@testing-library/jest-dom';

describe('Menu component', () => {
  test('Menu Img component', () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
});