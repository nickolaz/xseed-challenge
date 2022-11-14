import '@testing-library/jest-dom/extend-expect';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import {
  mockCharacter,
  mockPeopleResponse,
  mockPlanetResponse1,
  mockPlanetResponse2,
} from '../../../utils';
import CharactersPage from './CharactersPage';

interface mockPlanets {
  [key: string]: any;
}

const mockResponsePlanet: mockPlanets = {
  'https://swapi.dev/api/planets/1/': mockPlanetResponse1,
  'https://swapi.dev/api/planets/2/': mockPlanetResponse2,
};

jest.mock('axios', () => {
  const axiosInstance = {
    get: async (url: string) => {
      const axiosResponse = {
        status: 200,
        data: {},
      };
      if (url === '/people') {
        axiosResponse.data = mockPeopleResponse;
      } else {
        axiosResponse.data = mockResponsePlanet[url];
      }
      return axiosResponse;
    },
  };
  return {
    __esModule: true,
    default: {
      create: () => axiosInstance,
    },
    interceptors: jest.fn(),
  };
});

jest.mock('react-redux', () => {
  return {
    useSelector: () => ({
      favorites: [],
    }),
    useDispatch: () => jest.fn(),
  };
});

describe('Tests CharactersPage Component', () => {
  test('render a CharactersPage', async () => {
    const component = render(<CharactersPage />);
    await waitFor(() => {
      //Check if the Data of character is render
      const nameInScreen = screen.getAllByText(mockCharacter.name);
      const genderInScreen = screen.getAllByText(
        `${mockCharacter.gender} | ${mockCharacter.birth_year}`,
      );
      const planetInScreen = screen.getAllByText(mockCharacter.planet!);
      //check if this data is showing
      expect(nameInScreen).toBeDefined();
      expect(genderInScreen).toBeDefined();
      expect(planetInScreen).toBeDefined();
    });
  }),
    test('CharactersPage click to check favorite', async () => {
      const component = render(<CharactersPage />);
      await waitFor(() => {
        const btn = component.getAllByRole('button');
        //fire click in the last button
        fireEvent.click(btn[btn.length - 1]);
      });
    }),
    test('CharactersPage click to uncheck favorite', async () => {
      const component = render(<CharactersPage />);
      await waitFor(() => {
        const btn = component.getAllByRole('button');
        //fire click in the last button
        fireEvent.click(btn[btn.length - 1]);
        fireEvent.click(btn[btn.length - 1]);
      });
    });
});
