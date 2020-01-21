import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './reducers/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
