import Homescreen from './screens/homescreen';
import Taskscreen from './screens/taskscreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignInScreen from './screens/signinscreen';
import RegisterScreen from './screens/registerscreen';
import CreateTask from './screens/createtaskscreen';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from './actions/userActions';

function App() {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  }


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <img className="logo" src="logo.png" height="150" width="250" alt="tudu-logo"></img>
          <ul className="navul">
            <Link to="/">Home</Link>
            {userInfo ? <Link to="/profile">{userInfo.name}</Link> : 
            <Link to="/signin">Sign in</Link>
            }
            {userInfo ? <button onClick={handleLogout}>Logout</button>:
            <Link to="/register">Register</Link>}

            <Link to="/about">About</Link>
          </ul>
        </header>
        <main className="main">
          <Route className="route" path="/" exact={true} component={Homescreen}></Route>
          <Route className="route" path="/tasks/:id" component={Taskscreen}></Route>
          <Route className="route" path="/signin" component={SignInScreen}></Route>
          <Route className="route" path="/register" component={RegisterScreen}></Route>
          <Route className="route" path="/createtask" component={CreateTask}></Route>
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
