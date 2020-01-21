import { all } from 'redux-saga/effects';

import reserve from './booking/sagas';

function* rootSaga(params) {
  return yield all([reserve]);
}

export default rootSaga;
