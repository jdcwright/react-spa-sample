import { apply, put, call } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';
import Api from '../../api';

import { setTest } from './actions';

export function* onGetTest({ type, payload }: PayloadAction<string, string>) {
    try {
        // put API calls or other side effects here
        const response = yield call(Api.Test.getTest, payload);
        yield put(setTest(response));
    }
    catch (e) {
        // no op
    }
}
