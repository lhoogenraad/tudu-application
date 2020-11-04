import Axios from 'axios';
import Cookie from 'js-cookie';

const signIn =(email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post("/api/users/signin", {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        /* This line of code sets our browser cookie */
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

export {signIn};