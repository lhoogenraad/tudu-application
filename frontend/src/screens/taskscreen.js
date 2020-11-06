import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTask } from '../actions/taskActions';

function Taskscreen(props) {
    /* These are our react hook definitions */
    const dispatch = useDispatch();

    const taskSelect = useSelector(state => state.taskSelect);
    const { task , loading, error } = taskSelect;

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
                        <div className="details">
                            <div className="details-description">
                                <ul>
                                    <li>
                                        <h1>{task.name}</h1>
                                    </li>
                                    <li>
                                        <p>{task.description}</p>
                                    </li>
                                    <li>
                                        <p>Created on {task.date}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="details-actions">
                                <button className="deletebutton" onClick={handleDelete}>Delete task</button>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Taskscreen;