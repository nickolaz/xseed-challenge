import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CustomDrawer from './CustomDrawer';

const handleClose = jest.fn();

describe('Tests CustomDrawer Component', () => {
  test('render a CustomDrawer render', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <CustomDrawer handleClose={handleClose} />
      </MemoryRouter>,
    );
    const textInScreen = screen.getByText('Characters');
    expect(textInScreen).toBeDefined();
  });
});
