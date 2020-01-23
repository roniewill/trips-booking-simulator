import React from 'react';

import { useDispatch } from 'react-redux';

import { PageTitle, ActionButton, ListReserve } from '../../components';

import {
  removeReserve,
  updateReserveAmountRequest,
} from '../../store/reducers/booking/actions';

const ListReserveContainer = ({ reserves }) => {
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function plusAmount(trip) {
    dispatch(updateReserveAmountRequest(trip.id, trip.amount + 1));
  }

  function minusAmount(trip) {
    dispatch(updateReserveAmountRequest(trip.id, trip.amount - 1));
  }
  console.log(reserves.length);
  return (
    <div>
      <PageTitle title={`Reservas solictadas ${reserves.length}`} />

      {reserves.map(reserve => (
        <ListReserve
          key={reserve.id}
          reserve={reserve}
          handleRemove={() => handleRemove(reserve.id)}
          plusAmount={() => plusAmount(reserve)}
          minusAmount={() => minusAmount(reserve)}
        />
      ))}

      <ActionButton
        label="Finalizar Reserva"
        className="btn btn-primary"
        onSubmit={() => {}}
        disabled={reserves.length === 0}
      />
    </div>
  );
};

export default ListReserveContainer;
