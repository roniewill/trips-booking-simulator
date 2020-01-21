import React from 'react';

import './loading.css';

function Loading(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="loading-box">
        <strong>Loading...</strong>
        <div class="spinner-border" role="status" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default Loading;
