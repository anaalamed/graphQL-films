import { gql } from '@apollo/client';

export const QUERY_FILM_PROFILE = gql`
query FilmProfile($filmId: ID) {
  film(id: $filmId) {
    title
    episodeID
    openingCrawl
    director
    producers
    releaseDate
    created
    edited
    id
    characterConnection {
      characters {
        name
        homeworld {
          name
        }
      }
    }
    vehicleConnection {
      vehicles {
        name
        model
      }
    }
  }
}
`;