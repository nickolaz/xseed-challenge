import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import FavoriteButton from './FavoriteButton';

describe('Tests FavoriteButton Component', () => {
  test('render FavoriteBorderOutlinedIcon when not isFavorite', () => {
    const component = render(<FavoriteButton isFavorite={false} />);
    const svgElement = component.getByTestId('FavoriteBorderOutlinedIcon');
    expect(svgElement).toBeTruthy();
  }),
    test('render FavoriteOutlinedIcon when is isFavorite', () => {
      const component = render(<FavoriteButton isFavorite={true} />);
      const svgElement = component.getByTestId('FavoriteOutlinedIcon');
      expect(svgElement).toBeTruthy();
    });
  test('click buttom', () => {
    const mockHandler = jest.fn();
    const component = render(
      <FavoriteButton isFavorite={true} handleClick={mockHandler} />,
    );
    const btn = component.getByRole('button');
    fireEvent.click(btn);
    expect(mockHandler).toBeCalledTimes(1)
  });
});
