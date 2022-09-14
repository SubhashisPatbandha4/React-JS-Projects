import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  const [empData, setEmpData] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = {
      name: name,
      age: age,
      salary: salary,
    };
    if (edit) {
      // edit employee
      const copy = empData;
      Object.assign(copy[active], emp);
      setEmpData([...copy]);
      setEdit(false);
    } else {
      // add employee
      setEmpData([...empData, emp]);
    }
    // alert("Submitted Successfully");
    setName("");
    setAge("");
    setSalary("");
  };

  const editEmployee = (index) => {
    const emp = empData[index];

    setName(emp.name);
    setAge(emp.age);
    setSalary(emp.salary);

    setActive(index);
    setEdit(true);
  };

  const deleteEmp = (emp) => {
    if (window.confirm("Are you really want to delete")) {
      let copy = empData.filter((index) => index !== emp);
      setEmpData([...copy]);
    }
  };

  return (
    <>
      <h1 className=" heading">CRUD APP</h1>
      <div className="container form-container formContainer">
        <form onSubmit={handleSubmit} className="form-control form">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Age
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Your Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Salary
            </label>
            <input
              type="number"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Your Salary"
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              required
            />
          </div>
          <div class="mb-3">
            <button
              
              className="btn btn-warning saveButton"
            >
              {edit ? "update" : "add"}
            </button>
          </div>
        </form>
      </div>
      <table className="table mytable mt-6">
        <thead className="bg-info">
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
           
          
          
          empData.map((emp, index) => {
            return (
              <tr>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => editEmployee(index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmp(emp)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
