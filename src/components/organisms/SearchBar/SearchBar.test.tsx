import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { mockCharacter } from '../../../utils';
import SearchBar from './SearchBar';

describe('Test SearchBar', () => {
  test('test to render SearchBar', async () => {
    const handleSearch = jest.fn((searchValue: string) => {});

    const component = render(
      <SearchBar favorites={[mockCharacter]} handleSearch={handleSearch} />,
    );
    const input = component.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
