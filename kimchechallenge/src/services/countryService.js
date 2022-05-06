import { gql } from '@apollo/client';
import client from '../api/client';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export const countryService = {
  async getCountries() {
    const response = await client.query({
      query: LIST_COUNTRIES,
    });
    return response;
  },
};
