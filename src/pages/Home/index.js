import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';
import { addReserve } from '../../store/reducers/booking/actions';

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadTrips(params) {
      const res = await api.get('trips');
      setTrips(res.data);
    }

    loadTrips();
  }, []);

  function handleSubmit(trip) {
    dispatch(addReserve(trip));
  }

  return (
    <div>
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
                  onClick={() => handleSubmit(trip)}
                >
                  Solicitar Reserva
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
