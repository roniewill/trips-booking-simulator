import React from 'react';

const ActionButton = ({ label, className, onClick, disabled }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      {label}
    </button>
  );
};

export default ActionButton;
