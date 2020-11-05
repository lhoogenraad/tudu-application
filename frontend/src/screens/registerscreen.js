import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
//import { getUser } from '../actions/userActions';

function RegisterScreen(props) {
    /* These are our react hook definitions */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
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
        dispatch(register(email, password));
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Sign in</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>Invalid email or password</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        className="name"
                        name="name"
                        id="name"
                        placeholder="Name"
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
                        onChange={(e) => setRePassword(e.target.value)}
                        ></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Sign In</button>
                    </li>
                    <li>
                        New to TuDu?
                    </li>
                    <li>
                        <Link to="/register" className="button secondary text-center">Create an account</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default RegisterScreen;