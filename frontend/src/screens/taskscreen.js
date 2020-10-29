import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Taskscreen(props) {
    const [task, setTask] = useState();


    useEffect(() => {
        const fetchData = async () => {
          const {data} = await axios.get('/api/task/' + props.match.params.id);
          setTask(data);
        }
        fetchData();
        return () => {
          //
        };
      }, []);
    return (
        <div>
            <div>
                <Link to="/" className="back-button"><span>Back to your tasks</span></Link>
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
                <div className="details-actions">
                    <button className="deletebutton">Delete task</button>
                </div>
            </div>
        </div>
    )
}

export default Taskscreen;