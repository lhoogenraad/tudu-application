import Homescreen from './screens/homescreen';
import Taskscreen from './screens/taskscreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignInScreen from './screens/signinscreen';
import RegisterScreen from './screens/registerscreen';
import Logout from './screens/logout';
import { useSelector } from 'react-redux';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  
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
            {userInfo ? <Link to="/logout">Logout</Link>:
            <Link to="/register">Register</Link>}

            <Link to="/about">About</Link>
          </ul>
        </header>
        <main className="main">
          <Route className="route" path="/" exact={true} component={Homescreen}></Route>
          <Route className="route" path="/tasks/:id" component={Taskscreen}></Route>
          <Route className="route" path="/signin" component={SignInScreen}></Route>
          <Route className="route" path="/register" component={RegisterScreen}></Route>
          <Route className="route" path="/logout" component={Logout}></Route>
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
