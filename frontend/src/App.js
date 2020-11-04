import Homescreen from './screens/homescreen';
import Taskscreen from './screens/taskscreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignInScreen from './screens/signinscreen';

function App() {

  
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <img className="logo" src="logo.png" height="150" width="250" alt="tudu-logo"></img>
        <ul id="navul">
          <Link to="/">Home</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/about.js">About</Link>
        </ul>
      </header>
      <main className="main">
          <Route className="route" path="/" exact={true} component={Homescreen}></Route>
          <Route className="route" path="/tasks/:id" component={Taskscreen}></Route>
          <Route className="route" path="/signin" component={SignInScreen}></Route>
      </main>
      <footer className="footer"></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
