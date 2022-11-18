import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { mockCharacter } from '../../../utils';
import FavoritesPage from './FavoritesPage';

jest.mock('react-redux', () => {
  return {
    useSelector: () => ({
      favorites: [{ ...mockCharacter, isFavorite: true }],
    }),
    useDispatch: () => jest.fn(),
  };
});

describe('Tests FavoritesPage Component', () => {
  test('render a FavoritesPage', async () => {
    const component = render(
      <MemoryRouter initialEntries={['/favorites']}>
        <FavoritesPage />
      </MemoryRouter>,
    );
    await waitFor(() => {
      // Get the data of MockCharacter
      const nameInScreen = screen.getByText(mockCharacter.name);
      const genderInScreen = screen.getByText(
        `${mockCharacter.gender} | ${mockCharacter.birth_year}`,
      );
      const planetInScreen = screen.getAllByText(mockCharacter.planet!);
      //check if this data is showing
      expect(nameInScreen).toBeDefined();
      expect(genderInScreen).toBeDefined();
      expect(planetInScreen).toBeDefined();
    });
  }),
    test('click buttom in a element', async () => {
      const component = render(
        <MemoryRouter initialEntries={['/favorites']}>
          <FavoritesPage />
        </MemoryRouter>,
      );
      await waitFor(() => {
        //Test click the button in an element of a List
        const favBtn =
          component.container.getElementsByClassName('iconButtonStyle');
        fireEvent.click(favBtn[0]);
      });
    }),
    test('Test Handle Search', async () => {
      const component = render(
        <MemoryRouter initialEntries={['/favorites']}>
          <FavoritesPage />
        </MemoryRouter>,
      );
      await waitFor(() => {
        const input = component.getByRole('combobox');
        fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.change(input, { target: { value: 'R2-D2' } });
      });
    });
});
