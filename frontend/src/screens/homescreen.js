import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listTasks } from '../actions/taskActions';
import Cookie from 'js-cookie';

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
    }
    return () => { };
  }, []);

  return (
    loading ? <div className="tasklist loading">Loading...</div> :
      error ? <div>{error}</div> :
      !userInfo ? < div className="tasklist loading">Not logged in 
      <ul className="navul">
      <Link to="/signin">Sign in</Link>
      <Link to="/register">Create an account</Link>
      </ul>
      </div> :
      tasks.length < 1 ? <div className="tasklist notasks"><span className="float">You currently have no tasks</span>
      <Link to='/createtask'>Create a task</Link></div>:
        <div className="tasklist">
          <ul className="tasksul">
            {
              tasks.map(task =>
                <Link to={"/tasks/" + task._id}>
                <li className="taskli" key={task._id}>
                  <div className="task">
                    <input type="checkbox"></input>
                    <div className="tasklistname">{task.name}</div>
                    <div className="tasklistdate">{task.date}</div>
                    <button className="deletebutton">Delete</button>
                  </div>
                </li>
                </Link>
              )
            }
          </ul>
        </div>
  )
}

export default Homescreen;