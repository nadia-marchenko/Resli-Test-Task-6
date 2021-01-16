import React from 'react';
import PropTypes from "prop-types";
import './index.scss';

const EmployeeCard = (props) => {
  const { name, removeEmployee } = props;

  return (
      <div className="employee-card toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="mr-auto">{name}</strong>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={() => removeEmployee(name)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          Here will be a photo
        </div>
      </div>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  removeEmployee: PropTypes.func.isRequired,
}


export default EmployeeCard;