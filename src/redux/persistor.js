import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

const authTransform = createBlacklistFilter(
  'auth', // which reducer
  ['error', 'isLoading', 'loggingIn'], // what not to save
);

export default function persistRootReducer(reducer) {
  return persistReducer(
    {
      storage,
      key: 'root',
      transforms: [authTransform],
      whitelist: ['auth'],
    },
    reducer,
  );
}
