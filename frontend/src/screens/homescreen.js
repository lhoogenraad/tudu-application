import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Homescreen(props) {
  /* These are our react hook definitions */
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/api/tasks');
      setTasks(data);
    }
    fetchData();
    return () => {};
  }, []);

  return (
        <ul className="tasksul">
          {
            tasks.map(task =>
              <li className="taskli" key={task.id}>
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

export default Homescreen;