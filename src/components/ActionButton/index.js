import React from 'react';

const ActionButton = ({ label, btnClass, onSubmit, disabled }) => {
  return (
    <button
      type="button"
      className={btnClass}
      onClick={onSubmit}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ActionButton;
