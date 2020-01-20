import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdAdd, MdRemove } from 'react-icons/md';

import './booking.css';
import {
  removeReserve,
  updateReserve,
} from '../../store/reducers/booking/actions';

export default function Booking() {
  const reserves = useSelector(state => state.booking);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function plusAmount(trip) {
    dispatch(updateReserve(trip.id, trip.amount + 1));
  }

  function minusAmount(trip) {
    dispatch(updateReserve(trip.id, trip.amount - 1));
  }

  return (
    <div>
      <h1 className="display-4">Reservas solictadas {reserves.length}</h1>

      {reserves.map(reserve => (
        <div className="booking-box" key={reserve.id}>
          <img src={reserve.image} alt="Trips" />
          <p className="lead">{reserve.title}</p>

          <div className="input-group m-2 col-2">
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => minusAmount(reserve)}
                disabled={reserve.amount === 1}
              >
                <MdRemove />
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              value={reserve.amount}
              disabled
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => plusAmount(reserve)}
              >
                <MdAdd />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleRemove(reserve.id)}
          >
            <MdDelete />
          </button>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-primary"
        disabled={reserves.length === 0}
      >
        Finalizar Reserva
      </button>
    </div>
  );
}
