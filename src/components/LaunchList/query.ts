import { gql } from '@apollo/client';

export const QUERY_FILMS = gql`
query FilmsList {
  allFilms {
    films {
      title
      id
    }
  }
}

`;