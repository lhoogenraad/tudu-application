import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function homescreen (props) {
  /* These are our react hook definitions */
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/api/tasks');
    }
    return () => {
      //
    };
  }, []);

    return (
          <ul className="tasksul">
            {
              data.tasks.map(task =>
                <li className="taskli">
                  <div className="task">
                    <input type="checkbox"></input>
                    <div className="tasklistname">{task.name}</div>
                    <div className="tasklistdate">{task.date}</div>
                    <Link to={'/tasks/' + task.id}>View task</Link>
                    <button className="deletebutton">Delete</button>
                  </div>
                </li>
                )
            }
          </ul>
    )
}

export default homescreen;