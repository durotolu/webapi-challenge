import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Actions(props) {

  const [actions, setActions] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5500/api/projects/${props.match.params.id}/actions`)
      .then(res => {
        setActions(res.data)
      })
      .catch(err => {
        alert(err.message);
      })
  }, [props.match.params.id])

  return (
    <div className="App">
        <div>
            {actions.map(action => <div>
                                    <div>notes: {action.notes}</div>
                                    <div>description: {action.description}</div>
                                </div>
            )}
        </div>
    </div>
  );
}

export default Actions;