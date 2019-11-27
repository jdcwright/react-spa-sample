import { getType, ActionType } from 'typesafe-actions';
import * as Actions from './actions';

export interface ITestState {
    a: Models.Test;
}

const initialState: ITestState = {
    a: {
        id: 'tset',
        name: 'yolo'
    }
};

export const testReducer = (state: ITestState = initialState, { type, payload }: ActionType<typeof Actions>) => {
    switch (type) {
        case getType(Actions.setTest): {
            return {
                ...state,
                a: payload as Models.Test
            };
        }
        default: {
            return state;
        }
    }
};
