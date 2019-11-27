import React from 'react';
import { Switch, Route } from 'react-router';

export const App: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route path="/" component={() => <h1>BALLER</h1>} />
        </Switch>
    );
};
