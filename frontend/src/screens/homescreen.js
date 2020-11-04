import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listTasks } from '../actions/taskActions';

function Homescreen(props) {
  /* These are our react hook definitions */
  //const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();

  const taskList = useSelector(state => state.taskList);
  const { tasks, loading, error } = taskList;

  useEffect(() => {
    dispatch(listTasks());
    return () => { };
  }, []);

  return (
    loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <div className="tasklist">
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
        </div>
  )
}

export default Homescreen;