import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, getTask } from '../actions/taskActions';

function Taskscreen(props) {
    /* These are our react hook definitions */
    const dispatch = useDispatch();

    const taskSelect = useSelector(state => state.taskSelect);
    const { task, loading, error } = taskSelect;
    const [taskDate, setDate] = useState('');
    
    useEffect(() => {
        dispatch(getTask(props.match.params.id));
        return () => { };
    }, []);

    const handleDelete = (e) => {
        // Prevent page from doing stuff on delete button click
        e.preventDefault();
        // Call delete method in deleteActions with the task id field
        dispatch(deleteTask(props.match.params.id));
        // Redirect user to home page
        props.history.push('/');
    }

    return (
        <div>
            <div>
                <Link to="/" className="back-button"><span>Back to your tasks</span></Link>
            </div>
            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    (
                        <div className="tasklist">
                            <div className="details">
                                <ul>
                                    <li>
                                        <label className="taskLabel">Task name</label>
                                        <h1>{task.name}</h1>
                                    </li>
                                    {
                                        task.description ?
                                            <li>
                                                <label className="taskLabel">Task description</label>
                                                <h1>{task.description}</h1>
                                            </li>
                                            : <span></span>
                                    }
                                    <li>
                                        <p>Created on {task.dateCreated.substring(0, 10)}</p>
                                    </li>

                                    <li>
                                        <button className="deletebutton" onClick={handleDelete}>Delete task</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    )
            }
        </div>
    )
}

export default Taskscreen;