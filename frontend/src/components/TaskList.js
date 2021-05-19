import React from 'react';

import './TaskList.css';

function TaskList(props) {
  return (
    <ul>
      {props.tasks && props.tasks.length > 0
        ? props.tasks.map((task) => (
          <li key={task.title}>
            <h2>{task.title}</h2>
            <p>{task.text}</p>
          </li>
        )
      ) : "No tasks."}
    </ul>
  );
}

export default TaskList;
