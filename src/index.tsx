import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';

import { App } from './app/app';
import history from './app/history';
import store from './app/store';

const Root = hot(module)(() => (
    <Provider store={store} >
        <ConnectedRouter history={history} >
            <App />
        </ConnectedRouter>
    </Provider>
));

ReactDOM.render(<Root />, document.getElementById('root'));

/* TODO:
- setup bootstrap
- stub out a proper navbar + generic homepage
*/
