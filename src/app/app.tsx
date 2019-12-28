import React, { lazy } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from '../components/nav/navbar';

// Pages
import withSuspense from '../hoc/withSuspense';
import NotFound from '../components/notFound';
const Home = lazy(() => import('../components/home'));

export const App: React.FunctionComponent = () => {
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Switch>
                    <Route path="/" component={withSuspense(Home)} />

                    {/* 404 Handler must come last */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </div>
    );
};
