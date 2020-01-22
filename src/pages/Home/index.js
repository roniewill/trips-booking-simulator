import React, { useState, useEffect } from 'react';

import { api } from '../../services';
import { Loading, LoadTrips } from '../../components';

export default function Home() {
  const [trips, setTrips] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    async function loadTrips(params) {
      const res = await api.get('trips');
      setTrips(res.data);
    }

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
