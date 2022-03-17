import React, { useState, useEffect } from 'react';
import './App.css';
import useHttp from './components/hooks/use-http';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isSending, setSending] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { sendRequest } = useHttp();

  async function fetchTasks() {
    try {
      setLoading(true);

      const restoreTasks = data => {
        const loadedTasks = [];
        for (const item in data) {
          loadedTasks.push({ key: item, text: data[item].text });
        }
        setTasks(loadedTasks);
      };

      sendRequest(
        {
          url: 'https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp.json',
        },
        restoreTasks
      );
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

    const addSingleTask = data => {
      const singleTask = { key: data.name, text: task.text };

      setTasks(prevTasks => prevTasks.concat(singleTask));
    };

    sendRequest(
      {
        url: 'https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp.json',
        method: 'POST',
        body: task,
        headers: {
          'Content-type': 'application/json',
        },
      },
      addSingleTask
    );
    setSending(false);
  }

  const deleteTaskHandler = async key => {
    const deleteInfo = () => {
      console.log(key + ' deleted !');
    };

    sendRequest(
      {
        url: `https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp/${key}.json`,
        method: 'DELETE',
      },
      deleteInfo
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
