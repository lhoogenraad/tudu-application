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
            <Link to="/" className="navButton">Home</Link>
            {
            userInfo ? 
            <span>
               <Link to="/profile" className="navButton">{userInfo.name}</Link> 
               <Link className="navButton" onClick={handleLogout}>Logout</Link>
            </span> : 
            <span>
            <Link to="/signin" className="navButton">Sign in</Link>
            <Link to="/register" className="navButton">Register</Link>
            </span>
            }
            <Link to="/about" className="navButton">About</Link>
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
