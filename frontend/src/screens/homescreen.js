import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listTasks } from '../actions/taskActions';

function Homescreen(props) {
  /* These are our react hook definitions */
  const taskList = useSelector((state) => state.taskList);
  const {tasks, loading, error} = taskList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTasks());
    return () => {};
  }, []);

  return (
    loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
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