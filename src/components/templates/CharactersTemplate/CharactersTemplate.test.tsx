import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import { mockCharacter } from '../../../utils';
import CharactersTemplate from './CharactersTemplate';

const mockHandler = jest.fn();

describe('Tests CharactersTemplate Component', () => {
  test('render a CharactersTemplate loading 10 CharacterSkeleton', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <CharactersTemplate
          error={''}
          characteres={[]}
          loading={true}
          updateFavorites={mockHandler}
        />
      </MemoryRouter>,
    );
    const countSkeletons =
      component.container.getElementsByClassName('skeletonStyle');
    // 4 skeletonStyle for CharacterSkeleton
    // 10 CharacterSkeleton for fill the screen with skeletons
    expect(countSkeletons.length).toBe(40);
  }),
    test('render a CharactersTemplate show Character', () => {
      const component = render(
        <MemoryRouter initialEntries={['/']}>
          <CharactersTemplate
            error={''}
            characteres={[mockCharacter]}
            loading={false}
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
        <MemoryRouter initialEntries={['/']}>
          <CharactersTemplate
            error={''}
            characteres={[mockCharacter]}
            loading={false}
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
      const errorMsg = 'Characters Not Found';
      const component = render(
        <MemoryRouter initialEntries={['/']}>
          <CharactersTemplate
            error={errorMsg}
            characteres={[]}
            loading={false}
            updateFavorites={mockHandler}
          />
        </MemoryRouter>,
      );
      const errorMsgInScreen = screen.getByText(errorMsg);
      expect(errorMsgInScreen).toBeDefined();
    });
});
