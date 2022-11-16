import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { favoritesActions, RootStoreType } from '../../../store';
import { CharacterType } from '../../../utils';
import { FavoritesTemplate } from '../../templates';

const FavoritesPage = () => {
  const { favorites } = useSelector((state: RootStoreType) => state.favorites);
  const [error, setError] = useState<String>('');
  const [_favorites, setFavorites] = useState<CharacterType[]>(favorites);
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (searchValue: string) => {
      if (searchValue !== '') {
        const searchItems = _favorites?.filter((favorite) => {
          return (
            favorite.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            favorite.gender.toLowerCase().includes(searchValue.toLowerCase()) ||
            favorite.birth_year
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            favorite.planet?.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
        setFavorites(searchItems);
        if (searchItems.length === 0) {
          setError('Sorry, can`t find Characters');
        } else {
          setError('');
        }
      } else {
        setFavorites(favorites);
        setError('');
      }
    },
    [favorites, setFavorites, _favorites],
  );

  const updateFavorites = useCallback(
    (character: CharacterType) => {
      const favoritesCopy: CharacterType[] = [...favorites];
      const index = favoritesCopy.indexOf(character);
      if (index > -1) {
        favoritesCopy.splice(index, 1);
      }
      const _favoritesCopy: CharacterType[] = [..._favorites];
      const _index = _favoritesCopy.indexOf(character);
      if (_index > -1) {
        _favoritesCopy.splice(_index, 1);
      }
      setFavorites(_favoritesCopy);
      dispatch(favoritesActions.updateFavorites(favoritesCopy));
    },
    [_favorites, favorites],
  );

  return (
    <FavoritesTemplate
      favorites={_favorites}
      error={error}
      handleSearch={handleSearch}
      updateFavorites={updateFavorites}
    />
  );
};

export default FavoritesPage;
