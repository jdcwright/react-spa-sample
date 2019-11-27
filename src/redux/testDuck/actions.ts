import { createAction } from 'typesafe-actions';

 // repo/duck_name/action_name
const GET_TEST = 'example/test/GET_TEST';
const SET_TEST = 'example/test/SET_TEST';

export const getTest = createAction(GET_TEST)<string>();
export const setTest = createAction(SET_TEST)<Models.Test>();
// setTest(testObject: Models.Test) => { type: SET_TEST, payload: Models.TEST };
