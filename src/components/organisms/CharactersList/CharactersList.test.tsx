import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import { mockCharacter } from '../../../utils';
import CharactersList from './CharactersList';

const mockHandler = jest.fn();

describe('Tests CharacterList Component', () => {
  test('render a CharacterList loading 10 CharacterSkeleton', () => {
    const component = render(
      <CharactersList
        characteres={[]}
        loading={true}
        updateFavorites={mockHandler}
      />,
    );
    const countSkeletons =
      component.container.getElementsByClassName('skeletonStyle');
    // 4 skeletonStyle for CharacterSkeleton
    // 10 CharacterSkeleton for fill the screen with skeletons
    expect(countSkeletons.length).toBe(40);
  }),
    test('render a CharacterList show Character', () => {
      const component = render(
        <CharactersList
          characteres={[mockCharacter]}
          loading={false}
          updateFavorites={mockHandler}
        />,
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
        <CharactersList
          characteres={[mockCharacter]}
          loading={false}
          updateFavorites={mockHandler}
        />,
      );
      //Test click the button in an element of a List
      const btn = component.getByRole('button');
      fireEvent.click(btn);
      expect(mockHandler).toBeCalledTimes(1);
    });
});
