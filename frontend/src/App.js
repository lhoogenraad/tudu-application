import data from './data';
import './App.css';
import homescreen from './screens/homescreen';
import taskscreen from './screens/taskscreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <img className="logo" src="logo.png" height="150" width="250"></img>
        <ul id="navul">
          <Link to="/">Home</Link>
          <Link to="/">not sure yet</Link>
          <Link to="/about.js">About</Link>
        </ul>
      </header>
      <main className="main">
        <div className="tasklist">
          <Route className="route" path="/" exact={true} component={homescreen}></Route>
          <Route className="route" path="/tasks/:id" component={taskscreen}></Route>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
