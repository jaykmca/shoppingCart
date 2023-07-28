import { configureStore } from  '@reduxjs/toolkit'
import rootReducers from './rootReducers'
import createSagaMiddleWare from 'redux-saga'
import SagaData from './saga'
const sagaMiddleWare = createSagaMiddleWare()

const store = configureStore({
   
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
   
})

sagaMiddleWare.run(SagaData)

export default store 