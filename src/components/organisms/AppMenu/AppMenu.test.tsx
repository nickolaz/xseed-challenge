import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import AppMenu from './AppMenu';

describe('Tests AppMenu Component', () => {
  test('render a AppMenu render', () => {
    const title = 'Menu Title';
    const childrenText = 'Main text';
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <AppMenu title={title}>{childrenText}</AppMenu>
      </MemoryRouter>,
    );
    const textInScreen = screen.getByText(childrenText);
    expect(textInScreen).toBeDefined();
  }),
    test('render a AppMenu click menu button', () => {
      const title = 'Menu Title';
      const childrenText = 'Main text';
      const component = render(
        <MemoryRouter initialEntries={['/']}>
          <AppMenu title={title}>{childrenText}</AppMenu>
        </MemoryRouter>,
      );
      const btn = screen.getByRole('button');
      fireEvent.click(btn);
    });
});
