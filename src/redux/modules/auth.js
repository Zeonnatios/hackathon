import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/lib/constants';

import { createSagaAction, createReducer } from '../utils';

// Constants
export const constants = {
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_LOGIN: createSagaAction('AUTH_LOGIN'),
  AUTH_SIGNIN: createSagaAction('AUTH_SIGNIN'),
};

// ------------------------------------
// Constants
// ------------------------------------
export const actions = {
  logout: () => ({
    type: constants.AUTH_LOGOUT,
  }),
  login: (email, password, success, error) => ({
    type: constants.AUTH_LOGIN.ACTION,
    email,
    password,
    success,
    error,
  }),
  sigin: (name, email, password, success, error) => ({
    type: constants.AUTH_SIGNIN.ACTION,
    name,
    email,
    password,
    success,
    error,
  }),
};

export const initialState = {
  error: null,
  isLoading: false,
  token: null,
  user: {},
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // REHYDRATE
  [REHYDRATE]: (state, action) => {
    // const persisted = action.payload ? action.payload.a : {}
    const persisted = _.get(action, 'payload.auth', {});
    return {
      ...state,
      user: persisted.user || initialState.user,
      token: persisted.token || initialState.token,
    };
  },

  // AUTH_LOGOUT
  [constants.AUTH_LOGOUT]: () => initialState,

  // AUTH_LOGIN.ACTION
  [constants.AUTH_LOGIN.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoading: true,
  }),

  [constants.AUTH_LOGIN.SUCCESS]: (state, action) => {
    const { user, token } = action.payload;
    return {
      ...state,
      token,
      user,
      isLoading: false,
    };
  },

  // AUTH_LOGIN.FAILED
  [constants.AUTH_LOGIN.FAILED]: (state, action) => ({
    ...state,
    error: action.message,
    isLoading: false,
  }),

  // AUTH_SIGNIN.ACTION
  [constants.AUTH_SIGNIN.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoading: true,
  }),

  [constants.AUTH_SIGNIN.SUCCESS]: (state, action) => {
    const { user, token } = action.payload;
    return {
      ...state,
      token,
      user,
      isLoading: false,
    };
  },

  // AUTH_SIGNIN.FAILED
  [constants.AUTH_SIGNIN.FAILED]: (state, action) => ({
    ...state,
    error: action.message,
    isLoading: false,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------

export default createReducer(initialState, (state, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : { ...state, isLoading: false };
});
