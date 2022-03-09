import React, { useState } from 'react';
import './App.css';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    { key: Math.random(), text: 'rower' },
    { key: Math.random(), text: 'samochod' },
    { key: Math.random(), text: 'klucze' },
  ]);

  const taskArray = [
    { key: '1', name: 'rower' },
    { key: '2', name: 'samochod' },
    { key: '3', name: 'klucze' },
  ];

  const addTaskHandler = task => {
    // const savedTasks = [];
    // for (const task in tasks) {
    //   savedTasks.push(task);
    // }
    setTasks(tasks.concat(task));
    console.log(task);
    // console.log(tasks);
  };

  return (
    <React.Fragment>
      <NewTask addTaskHandler={addTaskHandler} />
      <Tasks items={tasks} />
    </React.Fragment>
  );
}

export default App;
