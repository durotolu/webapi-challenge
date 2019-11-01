import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const ProjectStyle = styled.div`
    color: #f39422;

    Link {
      color: #f39422;
      margin: 1em;
      border-top: 0.5em solid #537ec5;
    }
`

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
    <ProjectStyle>
      <header className="App-header">
        <div className="App">
          {projects.map(project => (<Link to={`/${project.id}`}>
                                <div>name: {project.name}</div>
                                <div>description: {project.description}</div>
                                </Link>
          ))}
        </div>
      </header>
    </ProjectStyle>
  );
}

export default App;
