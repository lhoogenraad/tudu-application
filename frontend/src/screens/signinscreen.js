import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../actions/userActions';
//import { getUser } from '../actions/userActions';

function SignInScreen(props) {
    /* These are our react hook definitions */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
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
        dispatch(signIn(email, password));
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

export default SignInScreen;