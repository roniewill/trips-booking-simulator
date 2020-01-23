import React from 'react';

import { useSelector } from 'react-redux';

import './booking.css';
import { ListReserveContainer } from '../../containers';

export default function Booking() {
  const reserves = useSelector(state => state.booking);
  return <ListReserveContainer reserves={reserves} />;
}
