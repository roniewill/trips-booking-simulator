import React from 'react';

import { useDispatch } from 'react-redux';
import { addReserveRequest } from '../../store/reducers/booking/actions';

import { LoadTrips } from '../../components';

function LoadTripsContainer({ trips }) {
  const dispatch = useDispatch();

  function handleSubmit(id) {
    dispatch(addReserveRequest(id));
  }

  return (
    <div className="row row-cols-1 row-cols-md-2">
      {trips.map(trip => (
        <LoadTrips
          key={trip.id}
          trip={trip}
          handleSubmit={() => handleSubmit(trip.id)}
        />
      ))}
    </div>
  );
}

export default LoadTripsContainer;
