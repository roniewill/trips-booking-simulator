import React from 'react';

import { MdDelete, MdAdd, MdRemove } from 'react-icons/md';

const ListReserve = ({ reserve, minusAmount, plusAmount, handleRemove }) => {
  return (
    <div className="booking-box">
      <img src={reserve.image} alt="Trips" />
      <p className="lead">{reserve.title}</p>

      <div className="input-group m-2 col-2">
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={minusAmount}
            disabled={reserve.amount === 1}
          >
            <MdRemove />
          </button>
        </div>
        <input
          type="text"
          className="form-control text-center"
          value={reserve.amount}
          disabled
        />
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={plusAmount}
          >
            <MdAdd />
          </button>
        </div>
      </div>

      <button type="button" className="btn btn-warning" onClick={handleRemove}>
        <MdDelete />
      </button>
    </div>
  );
};

export default ListReserve;
