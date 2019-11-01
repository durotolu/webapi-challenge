import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';
//import Actions from './Actions'

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    debugger
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
          {projects.map(project => <Link to={`/${project.id}`}>
                                <div>{project.name}</div>
                                <div>{project.description}</div>
                                </Link>
          )}
        </div>
        {/* <Route path='/:id' render={props => <Actions {...props} />}/> */}
      </header>
    </div>
  );
}

export default App;
