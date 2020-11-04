import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { getUser } from '../actions/userActions';

function SignInScreen(props) {
    /* These are our react hook definitions */
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSelect = useSelector(state => state.userSelect);
    const { user , loading, error } = userSelect;



    useEffect(() => {
        return () => { };
    }, []);

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <label for="email">Email</label>
                        <input 
                        type="email"
                        className="email" 
                        name="email" 
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}></input>
                    </li>
                    <li>
                        <label>Password</label>
                        <input
                        type="password"
                        className="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </li>
                    <li>
                        <button type="submit" className="button-primary">Sign In</button>
                    </li>
                    <li>
                        New to TuDu?
                    </li>
                    <li>
                        <Link to="/register" className="button-full-width">Create an account</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignInScreen;