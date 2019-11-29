import React from 'react';
import { Switch, Route } from 'react-router';

import Navbar from '../components/nav/navbar';

export const App: React.FunctionComponent = () => {
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Switch>
                    <Route path="/" component={() => <h1>BALLER</h1>} />
                </Switch>
            </div>
        </div>
    );
};
