import React, { useState, useEffect } from 'react';

import { api } from '../../services';
import { Loading, AlertMessage } from '../../components';
import { LoadTripsContainer } from '../../containers';

export default function Home() {
  const [trips, setTrips] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  async function loadTrips() {
    setLoad(true);
    try {
      const res = await api.get('trips');
      setTrips(res.data);
    } catch (error) {
      setError(true);
    }
    setLoad(false);
  }

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <div>
      {error && (
        <AlertMessage
          type="danger"
          message="Alguma coisa está errada. Por favor tente em alguns instantes!"
        />
      )}
      {load && <Loading label="Carregando..." />}
      {trips && <LoadTripsContainer trips={trips} />}
    </div>
  );
}
