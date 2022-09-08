import React from 'react';
import PropTypes from 'prop-types';

function Alert({ children, type }) {
  return (
    <div
      className={`alert ${
        type === 'succes'
          ? 'alert--success'
          : type === 'loading'
          ? 'alert--loading'
          : type === 'danger'
          ? 'alert--danger'
          : ''
      }`}
    >
      {children}
    </div>
  );
}

export default Alert;

Alert.propTypes = {
  type: PropTypes.string,
};

Alert.defaultProps = {
  type: '',
};
