import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import { createTask } from '../actions/taskActions';

function CreateTaskScreen(props) {
    /* These are our react hook definitions */
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    //const [dateCreated, setDateCreated] = useState(''); //Pretty sure I don't need this const
    const [userID, setUserID] = useState('');
    
    const taskCreate = useSelector(state => state.taskCreate);
    const {loading, error} = taskCreate;

    // This code here sets the userID to the current user's ID
    const {userInfo} = Cookie.get('userInfo');
    setUserID(userInfo._id);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!userInfo){
            /*
                If user somehow navigated their way to this page without logging
                in, redirect them to the signin page.
            */
            props.history.push('/signin');
        }
        return () => { };
    }, [userInfo]);

    const submitHandler = (e) => {
        // Prevent page from refreshing after submission
        e.preventDefault();
        dispatch(createTask(name, description, userID));
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Create Task</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Task Name</label>
                        <input
                        type="text"
                        className="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        ></input>
                    </li>
                    <li>
                        <label htmlFor="description">Task Description (Option)</label>
                        <textarea
                        type="text"
                        className="description" 
                        name="description" 
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Create task</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default CreateTaskScreen;