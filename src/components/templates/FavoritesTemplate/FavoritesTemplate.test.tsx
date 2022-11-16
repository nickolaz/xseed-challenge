import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import { mockCharacter } from '../../../utils';
import FavoritesTemplate from './FavoritesTemplate';

const mockHandler = jest.fn();
const handleSearch = jest.fn((searchValue: string) => {});

describe('Tests FavoritesTemplate Component', () => {
  test('render a FavoritesTemplate', () => {
    const component = render(
      <MemoryRouter initialEntries={['/favorites']}>
        <FavoritesTemplate
          error={''}
          favorites={[mockCharacter]}
          handleSearch={handleSearch}
          updateFavorites={mockHandler}
        />
      </MemoryRouter>,
    );
    // Get the data of MockCharacter
    const nameInScreen = screen.getByText(mockCharacter.name);
    const genderInScreen = screen.getByText(
      `${mockCharacter.gender} | ${mockCharacter.birth_year}`,
    );
    const planetInScreen = screen.getByText(mockCharacter.planet!);
    //check if this data is showing
    expect(nameInScreen).toBeDefined();
    expect(genderInScreen).toBeDefined();
    expect(planetInScreen).toBeDefined();
  }),
    test('click buttom in a element', () => {
      const component = render(
        <MemoryRouter initialEntries={['/favorites']}>
          <FavoritesTemplate
            error={''}
            favorites={[mockCharacter]}
            handleSearch={handleSearch}
            updateFavorites={mockHandler}
          />
        </MemoryRouter>,
      );
      //Test click the button in an element of a List
      const btn = component.getByRole('button');
      fireEvent.click(btn);
      expect(mockHandler).toBeCalledTimes(1);
    }),
    test('Test show the error', () => {
      const errorMsg = 'Sorry, can`t find Characters';
      const component = render(
        <MemoryRouter initialEntries={['/favorites']}>
          <FavoritesTemplate
            error={errorMsg}
            favorites={[]}
            handleSearch={handleSearch}
            updateFavorites={mockHandler}
          />
        </MemoryRouter>,
      );
      const errorMsgInScreen = screen.getByText(errorMsg);
      expect(errorMsgInScreen).toBeDefined();
    }),
    test('Test Handle Search', () => {
      const component = render(
        <MemoryRouter initialEntries={['/favorites']}>
          <FavoritesTemplate
            error={''}
            favorites={[mockCharacter]}
            handleSearch={handleSearch}
            updateFavorites={mockHandler}
          />
        </MemoryRouter>,
      );
      const input = component.getByRole('combobox');
      fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
      expect(handleSearch).toHaveBeenCalledTimes(1);
    });
});
