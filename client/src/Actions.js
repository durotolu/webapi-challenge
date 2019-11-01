import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Actions(props) {
    debugger

  const [actions, setActions] = useState([])

  useEffect(() => {
      debugger
    axios.get(`http://localhost:4500/api/projects/${props.match.params.id}/actions`)
      .then(res => {
        console.log(res)
        debugger
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
                                    <div>{action.note}</div>
                                    <div>{action.description}</div>
                                </div>
            )}
        </div>
    </div>
  );
}

export default Actions;