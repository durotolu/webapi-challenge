import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const ActionStyle = styled.div`
    background-color: #010038;
    color: #f39422;

    section {
        margin: 1em;
        border-top: 0.5em solid #537ec5;
    }
`

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
    <ActionStyle className="App">
        <div>
            {actions.map(action => <section>
                                    <div>notes: {action.notes}</div>
                                    <div>description: {action.description}</div>
                                </section>
            )}
        </div>
    </ActionStyle>
  );
}

export default Actions;