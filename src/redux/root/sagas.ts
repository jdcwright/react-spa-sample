import { all } from 'redux-saga/effects';
import { getTestSaga } from '../testDuck/sagas';

export function* rootSaga() {
    yield all([
        getTestSaga()
    ]);
}
