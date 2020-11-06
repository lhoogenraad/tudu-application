import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTask } from '../actions/taskActions';

function Taskscreen(props) {
    /* These are our react hook definitions */
    const dispatch = useDispatch();

    const taskSelect = useSelector(state => state.taskSelect);
    const { task, loading, error } = taskSelect;

    useEffect(() => {
        console.log(props.match.params.id);
        dispatch(getTask(props.match.params.id));
        return () => { };
    }, []);

    const handleDelete = () => {
        console.log('not implemented sorry hoss');
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
                                            <h1>Task name</h1>
                                            <h3>{task.name}</h3>
                                        </li>
                                        <li>
                                            <label>Task description</label>
                                            <p>{task.description}</p>
                                        </li>
                                        <li>
                                            <p>Created on {task.dateCreated}</p>
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