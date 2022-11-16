import { useCallback, useMemo } from 'react';

import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Typography,
} from '@mui/material';

import { CharacterType } from '../../../utils';
import { CustomTextField } from '../../molecules';

interface SearchBarProps {
  favorites: CharacterType[];
  handleSearch: (searchValue: string) => void;
}

const SearchBar = ({ favorites, handleSearch }: SearchBarProps) => {
  const handleOnInputChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, value: string) =>
      handleSearch(value),
    [handleSearch],
  );

  const options = useMemo(
    () => favorites.map((favorite) => favorite.name),
    [favorites],
  );

  const renderCustomInput = useCallback(
    (params: AutocompleteRenderInputParams) => <CustomTextField {...params} />,
    [],
  );

  return (
    <>
      <Typography variant="subtitle1">Search a favourite</Typography>
      <Autocomplete
        freeSolo
        id="searchInput"
        onInputChange={handleOnInputChange}
        options={options}
        renderInput={renderCustomInput}
      />
    </>
  );
};

export default SearchBar;
