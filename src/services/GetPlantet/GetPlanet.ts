import { AxiosResponse } from 'axios';

import { PlanetResponse } from '../../utils';
import Api from '../Api';

const GetPlanet = async (
  url: string,
): Promise<AxiosResponse<PlanetResponse>> => {
  const response = Api.get<PlanetResponse>(url);
  return response;
};
export default GetPlanet;
