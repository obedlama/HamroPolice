import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';
<<<<<<< HEAD
import users from '../reducerSlice/users'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist';

        const persistConfig = {
        key: 'root',
        storage,
      }

        const reducer = combineReducers({
       users,
        //..
        })


        const persistedReducer = persistReducer(persistConfig, reducer)     
        export const store = configureStore({
        reducer:persistedReducer,
        middleware: [logger]
})

        export const persistor = persistStore(store)

// export default store;
=======
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger'
import users from '../reducerSlice/users'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
    users,
    //..
  })

const persistedReducer = persistReducer(persistConfig, reducer)

  export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware:[logger]
  })

  export const persistor = persistStore(store)
  
>>>>>>> d9460774f9f69c34ae1b41b8cfeec5ef3a82b3e5
