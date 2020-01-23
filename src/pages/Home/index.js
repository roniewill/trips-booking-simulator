import React, { useState, useEffect } from 'react';

import { api } from '../../services';
import { Loading } from '../../components';
import { LoadTripsContainer } from '../../containers';

export default function Home() {
  const [trips, setTrips] = useState([]);
  const [load, setLoad] = useState(false);

  async function loadTrips() {
    setLoad(true);
    try {
      const res = await api.get('trips');
      setTrips(res.data);
    } catch (error) {
      console.log('Error finded: ', error);
    }
  }

  useEffect(() => {
    loadTrips();
    setLoad(false);
  }, []);

  return (
    <div>
      {load && <Loading />}
      {trips && <LoadTripsContainer trips={trips} />}
    </div>
  );
}
