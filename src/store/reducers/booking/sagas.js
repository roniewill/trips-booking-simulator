import { select, call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addReserveSuccess, updateReserveAmountSuccess } from './actions';

function getStock(id) {
  const res = call(api.get, `stock/${id}`);
  return res;
}

function* addToReserve({ id }) {
  const tripExists = yield select(state =>
    state.booking.find(trip => trip.id === id)
  );

  const myStock = yield getStock(id);

  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('Atingiu limite do estoque!');
    return;
  }

  if (tripExists) {
    yield put(updateReserveAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);
    const data = { ...response.data, amount: 1 };
    yield put(addReserveSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const myStock = yield getStock(id);

  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert('Limite máximo atigindo!');
    return;
  }

  yield put(updateReserveAmountSuccess(id, amount));
}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve),
  takeLatest('UPDATE_RESERVE_AMOUNT_REQUEST', updateAmount),
]);
