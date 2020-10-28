import data from './data';
import './App.css';
import homescreen from './screens/homescreen';
import taskscreen from './screens/taskscreen';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <img className="logo" src="logo.png" height="150" width="250"></img>
        <ul id="navul">
          <li className="navli"><a href="index.html">Home</a></li>
          <li className="navli"><a href="uhh.html">???</a></li>
          <li className="navli"><a href="about.html">About</a></li>
        </ul>
      </header>
      <main className="main">
        <div className="tasklist">
          <Route path="/" exact={true} component={homescreen}></Route>
          <Route path="/tasks/:id" component={taskscreen}></Route>
          <h2>Your Tasks</h2>
          <ul className="tasksul">
            {
              data.tasks.map(task =>
                <li className="taskli">
                  <div className="task">
                    <input type="checkbox"></input>
                    <div className="tasklistname">task.name</div>
                    <div className="tasklistdate">task.date</div>
                    <button className="deletebutton">Delete</button>
                  </div>
                </li>
                )
            }
          </ul>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
