import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/api/projects')
      .then(res => {
        console.log(res)
        debugger
        setProjects(res.data)
      })
      .catch(err => {
        debugger
        alert(err.message);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {projects.map(project => (<Link to={`/${project.id}`}>
                                <div>name: {project.name}</div>
                                <div>description: {project.description}</div>
                                </Link>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
