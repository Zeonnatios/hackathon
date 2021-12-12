export function createSagaAction(type) {
  return {
    ACTION: `${type}.ACTION`,
    SUCCESS: `${type}.SUCCESS`,
    FAILED: `${type}.FAILED`,
  };
}

export const createReducer =
  (initialState, reducer) =>
  (state = initialState, action) =>
    reducer(state, action) || state;
