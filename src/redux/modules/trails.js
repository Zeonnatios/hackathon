import { createSagaAction, createReducer } from '../utils';

// Constants
export const constants = {
  GET_ALL_TRAILS: createSagaAction('GET_ALL_TRAILS'),
  GET_ALL_TECHNOLOGIES: createSagaAction('GET_ALL_TECHNOLOGIES'),
  GET_TRAILS_BY_TECHNOLOGY: createSagaAction('GET_TRAILS_BY_TECHNOLOGY'),
  GET_MY_TRAILS: createSagaAction('GET_MY_TRAILS'),
  CREATE_TRAIL: createSagaAction('CREATE_TRAIL'),
  GET_TRAIL_BY_ID: createSagaAction('GET_TRAIL_BY_ID'),
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
  }),
  getMyTrails: (userId, success, error) => ({
    type: constants.GET_MY_TRAILS.ACTION,
    userId,
    success,
    error,
  }),
  createTrail: (title, description, technologies, success, error) => ({
    type: constants.CREATE_TRAIL.ACTION,
    title,
    description,
    technologies,
    success,
    error,
  }),
  getTrailById: (trailId, success, error) => ({
    type: constants.GET_TRAIL_BY_ID.ACTION,
    trailId,
    success,
    error,
  }),
};

export const initialState = {
  error: null,
  isLoading: false,
  isLoadingTechnologies: false,
  allTrails: [],
  followedTrails: [],
  technologies: [],
  myTrails: [],
  currentTrail: {},
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
  // GET_MY_TRAILS.ACTION
  [constants.GET_MY_TRAILS.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoading: true,
  }),

  [constants.GET_MY_TRAILS.SUCCESS]: (state, action) => {
    const userTrails = action?.payload?.myTrails || [];
    const likedTrails = action?.payload?.likedTrails || [];
    return {
      ...state,
      myTrails: userTrails,
      followedTrails: likedTrails,
      isLoading: false,
    };
  },

  // GET_MY_TRAILS.FAILED
  [constants.GET_MY_TRAILS.FAILED]: (state, action) => ({
    ...state,
    error: action.message,
    isLoading: false,
  }),
  // CREATE_TRAIL.ACTION
  [constants.CREATE_TRAIL.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoading: true,
  }),

  [constants.CREATE_TRAIL.SUCCESS]: (state, action) => {
    return {
      ...state,
      myTrails: [...state, action.payload],
      isLoading: false,
    };
  },

  // CREATE_TRAIL.FAILED
  [constants.CREATE_TRAIL.FAILED]: (state, action) => ({
    ...state,
    error: action.message,
    isLoading: false,
  }),
  //.GET_TRAIL_BY_ID.ACTION
  [constants.GET_TRAIL_BY_ID.ACTION]: (state) => ({
    ...state,
    error: null,
    isLoading: true,
  }),

  [constants.GET_TRAIL_BY_ID.SUCCESS]: (state, action) => {
    return {
      ...state,
      currentTrail: action.payload,
      isLoading: false,
    };
  },

  //.GET_TRAIL_BY_ID.FAILED
  [constants.GET_TRAIL_BY_ID.FAILED]: (state, action) => ({
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
