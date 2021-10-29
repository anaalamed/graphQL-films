import * as React from 'react';
import { FilmsListQuery } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
    handleIdChange: (newId: string) => void;
}

interface Props extends OwnProps {
    data: FilmsListQuery;
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => {
    console.log(data);
    return (
        <div className={className}>
            <h3>Films</h3>
            <ol className={`${className}__list`}>
                {!!data.allFilms?.films &&
                    data.allFilms.films.map(
                        (film, i) =>
                            !!film && (
                                <li key={i} className={`${className}__item`}
                                    onClick={() => handleIdChange(film.id)}
                                >
                                    {film.title}
                                </li>
                            ),
                    )}
            </ol>
        </div>

    )
}


export default LaunchList;