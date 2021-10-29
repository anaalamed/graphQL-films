import * as React from 'react';
import { useFilmProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';

interface OwnProps {
    id: string;
}

const LaunchProfileContainer: React.FC<OwnProps> = ({ id }) => {
    const { data, error, loading, refetch } = useFilmProfileQuery({ variables: { filmId: String(id) } });

    React.useEffect(() => {
        refetch({ filmId: String(id) });
    }, [refetch, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a film from the panel</div>;
    }

    return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;