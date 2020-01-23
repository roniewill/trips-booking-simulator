import React from 'react';

import './loading.css';

const Loading = ({ label }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="loading-box">
        <strong>{label}</strong>
        <div className="spinner-border" role="status" aria-hidden="true"></div>
      </div>
    </div>
  );
};

export default Loading;
