export interface PeopleResponse {
  count: number;
  next: string;
  previous: null;
  results: CharacterType[];
}

export interface CharacterType {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
  planet?: string;
  isFavorite?: boolean;
}

export interface PlanetResponse {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface planetStore {
  homeworld: string;
  name: string;
}
