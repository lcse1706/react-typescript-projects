import React, { useState } from 'react';
import './App.css';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = task => {
    // const savedTasks = [];
    // for (const task in tasks) {
    //   savedTasks.push(task);
    // }
    setTasks(tasks.concat(task));
    console.log(task);
    // console.log(tasks);
  };

  const deleteTaskHandler = key => {
    setTasks(tasks.filter(task => task.key !== key));
  };

  return (
    <React.Fragment>
      <NewTask addTaskHandler={addTaskHandler} />
      <Tasks items={tasks} deleteTaskHandler={deleteTaskHandler} />
    </React.Fragment>
  );
}

export default App;
