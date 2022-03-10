import React, { useState, useEffect } from 'react';
import './App.css';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        'https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp.json'
      );
      const data = await response.json();

      const loadedTasks = [];

      for (const item in data) {
        loadedTasks.push({ key: data[item].key, text: data[item].text });
      }
      setTasks(loadedTasks);
    }

    fetchTasks();
  }, []);

  async function addTaskHandler(task) {
    setTasks(tasks.concat(task));

    const response = await fetch(
      'https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp.json',
      {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

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
