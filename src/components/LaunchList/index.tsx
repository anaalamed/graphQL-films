import * as React from 'react';
import { useFilmsListQuery } from '../../generated/graphql';
import LaunchList, { OwnProps } from './LaunchList';

const LaunchListContainer: React.FC<OwnProps> = (props) => {
    const { data, error, loading } = useFilmsListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;