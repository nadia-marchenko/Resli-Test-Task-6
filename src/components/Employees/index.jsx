import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import EditWindow from './EditWindow';
import EmployeeCard from './EmployeeCard';
import './index.scss';

const Employees = () => {
  const [isEdit, setEditMode] = useState(false);
  const [employees, setEmployee] = useState([]); // ['Ann', 'John', 'Artur', 'Ivan', 'Kolya', 'Vasya', 'Vanya']


  useEffect(async () => {
    const result = await axios(
      'https://reqres.in/api/users?per_page=12',
    );
    setEmployee(result.data.data.map(el => `${el.first_name} ${el.last_name}`));
  }, []);

  const removeArrayElement = (arr, name) => {
    return arr.filter(el => el !== name);
  }

  const removeEmployee = (removingName) => {
    setEmployee(removeArrayElement(employees, removingName));
  }

  const employeesList = employees.map(el => {
    return <EmployeeCard key={uuid()} name={el} removeEmployee={removeEmployee}/>
  });

  const handleAddButton = () => {
    setEditMode(true);
  }

  const handleAddingPerson = (newName) => {
    setEmployee(employees.concat(newName));
    setEditMode(false);
  }

  const handleCancelAdding = () => {
    setEditMode(false);
  }

  return (
    <main className="content-wrapper">
      <h1>Сотрудники</h1>
      <section className="card-container" >
        {employeesList}
        {isEdit || <button type="button" className="add-button btn btn-success" onClick={handleAddButton}>Add new</button>}
        {isEdit && <EditWindow handleAddingPerson={(name) => handleAddingPerson(name)} handleCancelAdding={handleCancelAdding}/>}
      </section>
    </main>
  );
};

export default Employees;