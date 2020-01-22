import React from 'react';

import { useSelector } from 'react-redux';

import './booking.css';
import { ListReserve } from '../../components';

export default function Booking() {
  const reserves = useSelector(state => state.booking);

  return <ListReserve reserves={reserves} />;
}
