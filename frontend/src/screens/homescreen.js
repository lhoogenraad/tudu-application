import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, listTasks, setTask } from '../actions/taskActions';

function Homescreen(props) {
  /* These are our react hook definitions */
  //const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();

  // This var will contain the task 

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
  const { userInfo } = userSignin;

  useEffect(() => {
    // If user is logged in, display their tasks
    if (userInfo) {
      dispatch(listTasks(userInfo._id));
    }
    return () => { };
  }, [dispatch, userInfo]);

  /* 
    This method will handle what happens when a user updates the completed status of a task.
    Should consider using state to not let user try update task again until something 
    is returned from method/dispatch
  */
  const handleUpdate = (taskid, e) => {
    console.log(taskid);
    console.log(e);
    dispatch(setTask(taskid, e));
    /* Ideally reloading the page isn't needed, but until i fix the weird
    checkbox bug, this kind of has to be here */
    //window.location.reload();
  }

  const handleDelete = (taskid, e) => {
    dispatch(deleteTask(taskid));
    window.location.reload();
  }


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
            <Link to='/createtask'>Create a task</Link></div> :
            <div className="tasklist">
              <ul className="tasksul">
                {
                  tasks.map(task =>
                    <li className="taskli" key={task._id}>
                      <div className="tasklicontents">
                        <div className="checkboxcontainer">
                          {task.isCompleted ?
                            <input type="checkbox" className="taskcheckbox" checked="false" id="taskcheckbox" onChange={(e) => handleUpdate(task._id, e.target.checked)}></input> :
                            <input type="checkbox" className="taskcheckbox" id="taskcheckbox" onChange={(e) => handleUpdate(task._id, e.target.checked)}></input>
                          }
                        </div>
                        <Link to={"/tasks/" + task._id}>
                          <div className="tasklistname">{task.name}</div>
                        </Link>
                      </div>
                      <div className="tasklicontents">
                        <Link to={"/tasks/" + task._id}>
                          <div className="tasklistdate">{task.dateCreated.substring(0, 10)}</div>
                        </Link>
                        <button className="deletebutton" onClick={(e) => handleDelete(task._id, e)}>Delete</button>
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
  )
}

export default Homescreen;