import React, { useState } from 'react';
import './index.scss';
import PropTypes from "prop-types";

const EditWindow = (props) => {
  const { handleAddingPerson, handleCancelAdding } = props;
  const [value, setValue] = useState('');

  const handleAddButton = (event) => {
    handleAddingPerson(value);
    event.preventDefault();
  }

  const handleInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
      <div className="employee-card toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="edit-card toast-header">
        <div className="form-group">
          <div className="input-group">
            <input className="form-control form-control-sm" type="text" placeholder="Enter employee's name" id="inputSmall" value={value} onChange={(e) => handleInput(e)}/>
            <button type="submit" className="submit-btn input-group-text" onClick={handleAddButton}>Add</button>
          </div>
        </div>
        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={handleCancelAdding}>
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div className="toast-body">
        Here will be a photo
      </div>
    </div>
  );
};

EditWindow.propTypes = {
  handleAddingPerson: PropTypes.func.isRequired,
  handleCancelAdding: PropTypes.func.isRequired,
}

export default EditWindow;