import * as React from 'react';
import { FilmProfileQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: FilmProfileQuery;
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
    console.log(data);
    if (!data.film) {
        return <div>No film available</div>;
    }

    return (
        <div className={className}>
            <h1 >{data.film.title}</h1>
            <p><strong>Release at:</strong> {data.film.releaseDate}</p>
            <p><strong>About:</strong> {data.film.openingCrawl}</p>
            <p>Episodes: {data.film.episodeID}</p>
            <div><strong>Director:</strong> {data.film.director}</div>
            <p><strong>Producers:</strong> {data.film.producers}</p>

            <p><strong>Characters: </strong>
                {data.film.characterConnection?.characters?.map(character => (<p>{character?.name} - {character?.homeworld?.name}, </p>))}
            </p>

            <p><strong>Vehicles: </strong>
                {data.film.vehicleConnection?.vehicles?.map(vehicle => (<p>{vehicle?.name} - {vehicle?.model}, </p>))}
            </p>
        </div>
    );
};

export default LaunchProfile;