import { AxiosResponse } from 'axios';

import { PeopleResponse } from '../../utils';
import Api from '../Api';

const GetPeople = async (): Promise<AxiosResponse<PeopleResponse>> => {
  const response = Api.get<PeopleResponse>('/people');
  return response;
};
export default GetPeople;
