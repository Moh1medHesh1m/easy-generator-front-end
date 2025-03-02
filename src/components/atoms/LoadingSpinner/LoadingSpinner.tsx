import '../../../styles/loading.css';

import React from 'react';

function LoadingSpinner() {
  return (
    <div className="loader">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
}

export default LoadingSpinner;
