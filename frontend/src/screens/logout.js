import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

function Logout(props) {


    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        // This line redirects the user to the sign in screen
        // when they press logout
        props.history.push("/signin");
    };

    handleLogout();

    return <br></br>
}

export default Logout;