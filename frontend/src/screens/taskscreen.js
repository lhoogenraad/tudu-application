import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function taskscreen(props) {
    console.log(props.match.params.id);
    const task = data.tasks.find(x => x.id === props.match.params.id);
    return (
        <div>
            <div>
                <Link to="/">Back to your tasks</Link>
            </div>
            <div className="details">
                <div className="details-description">
                    <ul>
                        <li>
                            <h1>{task.name}</h1>
                        </li>
                        <li>
                            <p>{task.description}</p>
                        </li>
                        <li>
                            <p>Created on {task.date}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default taskscreen;