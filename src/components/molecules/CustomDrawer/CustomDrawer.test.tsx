import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import CustomDrawer from './CustomDrawer';

const handleClose = jest.fn();

describe('Tests CustomDrawer Component', () => {
  test('render a CustomDrawer render', () => {
    const component = render(<CustomDrawer handleClose={handleClose} />);
    const textInScreen = screen.getByText('Characters');
    expect(textInScreen).toBeDefined();
  });
});
