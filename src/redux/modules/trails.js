import { createSagaAction, createReducer } from '../utils';

// Constants
export const constants = {
  GET_ALL_TRAILS: createSagaAction('GET_ALL_TRAILS'),
  GET_ALL_TECHNOLOGIES: createSagaAction('GET_ALL_TECHNOLOGIES'),
  GET_TRAILS_BY_TECHNOLOGY: createSagaAction('GET_TRAILS_BY_TECHNOLOGY'),
};

// ------------------------------------
// Constants
// ------------------------------------
export const actions = {
  getAllTrails: (success, error) => ({
    type: constants.GET_ALL_TRAILS.ACTION,
    success,
    error,
  }),
  getAllTechnologies: (success, error) => ({
    type: constants.GET_ALL_TECHNOLOGIES.ACTION,
    success,
    error,
  }),
  getTrailsByTechnology: (technology, success, error) => ({
    type: constants.GET_TRAILS_BY_TECHNOLOGY.ACTION,
    technology,
    success,
    error,
  })
};

export const initialState = {
  error: null,
  isLoading: false,
  isLoadingTechnologies: false,
  allTrails: [],
  technologies: [],
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // GET_ALL_TRAILS.ACTION
  [constants.GET_ALL_TRAILS.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoading: true,
  }),

  [constants.GET_ALL_TRAILS.SUCCESS]: (state, action) => {
    return {
      ...state,
      allTrails: action.payload,
      isLoading: false,
    };
  },

  // GET_ALL_TRAILS.FAILED
  [constants.GET_ALL_TRAILS.FAILED]: (state, action) => ({
    ...state,
    error: action.message,
    isLoading: false,
  }),

  // GET_ALL_TECHNOLOGIES.ACTION
  [constants.GET_ALL_TECHNOLOGIES.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoadingTechnologies: true,
  }),

  [constants.GET_ALL_TECHNOLOGIES.SUCCESS]: (state, action) => {
    return {
      ...state,
      technologies: action.payload,
      isLoadingTechnologies: false,
    };
  },

  // GET_ALL_TECHNOLOGIES.FAILED
  [constants.GET_ALL_TECHNOLOGIES.FAILED]: (state, action) => ({
    ...state,
    error: action.message,
    isLoadingTechnologies: false,
  }),
  // GET_TRAILS_BY_TECHNOLOGY.ACTION
  [constants.GET_TRAILS_BY_TECHNOLOGY.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoading: true,
  }),

  [constants.GET_TRAILS_BY_TECHNOLOGY.SUCCESS]: (state, action) => {
    return {
      ...state,
      allTrails: action.payload,
      isLoading: false,
    };
  },

  // GET_TRAILS_BY_TECHNOLOGY.FAILED
  [constants.GET_TRAILS_BY_TECHNOLOGY.FAILED]: (state, action) => ({
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
