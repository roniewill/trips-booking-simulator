import React from 'react';

import ActionButton from '../ActionButton';

function LoadTrips({ trip, handleSubmit }) {
  return (
    <div className="col mb-4">
      <div className="card">
        <img src={trip.image} className="card-img-top" alt="TRIPS" />
        <div className="card-body">
          <h5 className="card-title">{trip.title}</h5>
          <p className="card-text">
            {trip.status ? 'Disponível' : 'Indisponível'}
          </p>
          <ActionButton
            label="Solicitar Reserva"
            className="btn btn-primary btn-lg btn-block"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadTrips;
