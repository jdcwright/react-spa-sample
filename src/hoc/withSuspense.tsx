import React, { Suspense } from 'react';
import LazyLoading from '../components/shared/routeLoader';

const withSuspense = (Component: React.FunctionComponent) => {
    return (props: any) => (
        <Suspense fallback={<LazyLoading />}>
            <Component {...props} />
        </Suspense>
    );
};

export default withSuspense;
