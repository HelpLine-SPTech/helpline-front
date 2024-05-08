import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../features';

const persistConfig = {
  key: 'hl',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      },
    }),
})
let persistor = persistStore(store)

export { store, persistor }