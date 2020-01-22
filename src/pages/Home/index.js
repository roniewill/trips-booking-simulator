import React, { useState, useEffect } from 'react';

import { api } from '../../services';
import { Loading, LoadTrips } from '../../components';

export default function Home() {
  const [trips, setTrips] = useState([]);
  const [load, setLoad] = useState(false);

  async function loadTrips() {
    const res = await api.get('trips');
    setTrips(res.data);
  }

  useEffect(() => {
    setLoad(true);
    loadTrips();
    setLoad(false);
  }, []);

  return (
    <div>
      {load && <Loading />}
      {trips && <LoadTrips trips={trips} />}
    </div>
  );
}
