import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function homescreen (props) {
    return (
          <ul className="tasksul">
            {
              data.tasks.map(task =>
                <li className="taskli">
                  <div className="task">
                    <input type="checkbox"></input>
                    <div className="tasklistname">{task.name}</div>
                    <div className="tasklistdate">{task.date}</div>
                    <button className="deletebutton">Delete</button>
                    <Link to={'/tasks/' + task.id}>View task</Link>
                  </div>
                </li>
                )
            }
          </ul>
    )
}

export default homescreen;