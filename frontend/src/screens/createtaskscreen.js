import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createtask } from '../actions/userActions';
//import { getUser } from '../actions/userActions';

function CreateTaskScreen(props) {
    /* These are our react hook definitions */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    
    const taskCreate = useSelector(state => state.taskCreate);
    const {loading, userInfo, error} = taskCreate;
    const dispatch = useDispatch();



    useEffect(() => {
        /* If user is already logged in, redirect them to the homepage */
        if(userInfo){
            props.history.push('/');
        }
        return () => { };
    }, [userInfo]);

    const submitHandler = (e) => {
        // Prevent page from refreshing after submission
        e.preventDefault();
        dispatch(createtask(name, email, password));
        // After successfully createtasking an account, user is redirected to signin screen //
        props.history.push('/signin');
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Sign up</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
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
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        className="email" 
                        name="email" 
                        id="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </li>
                    <li>
                        <label htmlFor="repassword">Re-enter Password</label>
                        <input
                        type="password"
                        className="password"
                        name="repassword"
                        id="repassword"
                        placeholder="Re-enter password"
                        required
                        onChange={(e) => setRePassword(e.target.value)}
                        ></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Create account</button>
                    </li>
                    <li>
                        Already have an account?
                    </li>
                    <li>
                        <Link to="/signup" className="button secondary text-center">Sign in</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default CreateTaskScreen;