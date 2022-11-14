import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GetPeople, GetPlanet } from '../../../services';
import { favoritesActions, RootStoreType } from '../../../store';
import { CharacterType, ERROR_MSG, planetStore } from '../../../utils';
import { CharactersTemplate } from '../../templates';

const CharactersPage = () => {
  const [characters, setCharacters] = useState<CharacterType[]>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String>('');
  const { favorites } = useSelector((state: RootStoreType) => state.favorites);
  const dispatch = useDispatch();

  const getCharacters = async () => {
    try {
      setLoading(true);
      const peopleResponse = await GetPeople();
      if (peopleResponse.status === 200) {
        const characteres = peopleResponse.data.results;
        const charactersResult: CharacterType[] = [];
        const planets: planetStore[] = [];
        for (const character of characteres) {
          const findPlanet = planets.find(
            (planet) => planet.homeworld === character.homeworld,
          );
          if (!findPlanet) {
            const response = await GetPlanet(character.homeworld);
            if (response.status === 200) {
              character.planet = response.data.name;
              const planet = {
                homeworld: character.homeworld,
                name: response.data.name,
              };
              planets.push(planet);
            }
          } else {
            character.planet = findPlanet.name;
          }
          charactersResult.push(character);
        }
        setCharacters(charactersResult);
      }
    } catch (e) {
      setError(ERROR_MSG);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const updateFavorites = (character: CharacterType) => {
    const isFavorite = !character.isFavorite;
    const _favorites: CharacterType[] = [...favorites];
    if (isFavorite) {
      _favorites.push(character);
    } else {
      const index = _favorites.indexOf(character);
      if (index > -1) {
        _favorites.splice(index, 1);
      }
    }
    if (characters) {
      let _characters: CharacterType[] = characters.map((value) => {
        if (value.name === character.name) {
          const _value = { ...value, isFavorite: isFavorite };
          return _value;
        }
        return value;
      });
      setCharacters(_characters);
    }
    dispatch(favoritesActions.updateFavorites(_favorites));
  };

  return (
    <CharactersTemplate
      characteres={characters}
      error={error}
      loading={loading}
      updateFavorites={updateFavorites}
    />
  );
};

export default CharactersPage;
