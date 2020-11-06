import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listTasks } from '../actions/taskActions';

function Homescreen(props) {
  /* These are our react hook definitions */
  //const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();

  /* 
    Here we get the list of tasks the user has created
  */
  const taskList = useSelector(state => state.taskList);
  const { tasks, loading, error } = taskList;
  /* 
    Here we are 'getting' the userInfo cookie to decide whether to
    display tasks or suggest that the user logs in.
  */
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  useEffect(() => {
    // If user is logged in, display their tasks
    if(userInfo){
      dispatch(listTasks(userInfo._id));
      console.log('userInfo present');
    }
    return () => { };
  }, []);

  return (
    loading ? <div className="tasklist loading">Loading...</div> :
      error ? <div>{error}</div> :
      !userInfo ? <div>Not logged in</div> : 
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