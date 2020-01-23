import React from 'react';

import { useSelector } from 'react-redux';

import { Header } from '../../components';

const HeaderContainer = () => {
  const amountReserves = useSelector(state => state.booking.length);
  return <Header amountReserves={amountReserves} />;
};

export default HeaderContainer;
