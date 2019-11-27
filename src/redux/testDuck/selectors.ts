import { createSelector } from 'reselect';
import { IRootStateType } from '../root/reducers';
import { ITestState } from './reducers';

export const getStoreState: (store: IRootStateType) => ITestState = ({ test }) => test;

export const getTestObject = createSelector(
    getStoreState,
    ({ a }) => a
);
