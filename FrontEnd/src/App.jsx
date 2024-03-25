import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/khen')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Student Information</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.student_id}</td>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;