import React from 'react';

import { useDispatch } from 'react-redux';
import { addReserveRequest } from '../../store/reducers/booking/actions';

function LoadTrips({ trips }) {
  const dispatch = useDispatch();

  function handleSubmit(id) {
    dispatch(addReserveRequest(id));
  }

  return (
    <div className="row row-cols-1 row-cols-md-2">
      {trips.map(trip => (
        <div className="col mb-4" key={trip.id}>
          <div className="card">
            <img src={trip.image} className="card-img-top" alt="TRIPS" />
            <div className="card-body">
              <h5 className="card-title">{trip.title}</h5>
              <p className="card-text">
                {trips.status ? 'Disponível' : 'Indisponível'}
              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={() => handleSubmit(trip.id)}
              >
                Solicitar Reserva
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadTrips;
