import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import { mockCharacter } from '../../../utils';
import Character from './Character';

const mockHandler = jest.fn();

describe('Tests Character Component', () => {
  test('render a Character name', () => {
    render(
      <Character
        character={mockCharacter}
        updateFavorites={mockHandler}></Character>,
    );
    const nameInScreen = screen.getByText(mockCharacter.name);
    expect(nameInScreen).toBeDefined();
  }),
    test('render a Character gender | birth_year', () => {
      render(
        <Character
          character={mockCharacter}
          updateFavorites={mockHandler}></Character>,
      );
      const nameInScreen = screen.getByText(
        `${mockCharacter.gender} | ${mockCharacter.birth_year}`,
      );
      expect(nameInScreen).toBeDefined();
    }),
    test('render a Character planet', () => {
      render(
        <Character
          character={mockCharacter}
          updateFavorites={mockHandler}></Character>,
      );
      const nameInScreen = screen.getByText(mockCharacter.planet!);
      expect(nameInScreen).toBeDefined();
    }),
    test('click buttom', () => {
      const component = render(
        <Character
          character={mockCharacter}
          updateFavorites={mockHandler}></Character>,
      );
      const btn = component.getByRole('button');
      fireEvent.click(btn);
      expect(mockHandler).toBeCalledTimes(1);
    });
});
