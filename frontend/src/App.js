import Homescreen from './screens/homescreen';
import Taskscreen from './screens/taskscreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <img className="logo" src="logo.png" height="150" width="250" alt="tudu-logo"></img>
        <ul id="navul">
          <Link to="/">Home</Link>
          <Link to="/">not sure yet</Link>
          <Link to="/about.js">About</Link>
        </ul>
      </header>
      <main className="main">
        <div className="tasklist">
          <Route className="route" path="/" exact={true} component={Homescreen}></Route>
          <Route className="route" path="/tasks/:id" component={Taskscreen}></Route>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
