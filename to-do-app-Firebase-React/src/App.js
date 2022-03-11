import React, { useState, useEffect } from 'react';
import './App.css';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSending, setSending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchTasks() {
    try {
      setLoading(true);
      const response = await fetch(
        'https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp.json'
      );
      const data = await response.json();

      const loadedTasks = [];
      for (const item in data) {
        loadedTasks.push({ key: item, text: data[item].text });
      }
      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function addTaskHandler(task) {
    setSending(true);
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

    const singleTask = { key: data.name, text: task.text };

    setTasks(prevTasks => prevTasks.concat(singleTask));
    setSending(false);
  }

  const deleteTaskHandler = async key => {
    const response = await fetch(
      `https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp/${key}.json`,
      {
        method: 'DELETE',
      }
    );

    setTasks(prevTasks => prevTasks.filter(task => task.key !== key));
  };
  return (
    <React.Fragment>
      <NewTask loading={isSending} addTaskHandler={addTaskHandler} />
      {isLoading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <Tasks
          error={error}
          items={tasks}
          deleteTaskHandler={deleteTaskHandler}
          onFetch={fetchTasks}
        />
      )}
    </React.Fragment>
  );
}

export default App;
