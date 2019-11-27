import { connectRouter, RouterState, LocationChangeAction } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';

// local imports
import { History } from 'history';
import { testReducer, ITestState } from '../testDuck/reducers';

export interface IRootStateType {
    router: Reducer<RouterState, LocationChangeAction>;
    test: ITestState;
}

export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    test: testReducer
});
