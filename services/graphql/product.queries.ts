import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
    query allProducts {
      allProducts {
        id
        name
        description
        image_url
        price_in_cents
      }
}
`;