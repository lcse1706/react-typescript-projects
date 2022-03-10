import React, { useState, useEffect } from 'react';
import './App.css';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import Section from './components/UI/Section';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
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
      setLoading(false);
    }
    fetchTasks();
  }, [isFetching]);

  async function addTaskHandler(task) {
    await fetch(
      'https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp.json',
      {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    setFetching(!isFetching);
    // setTasks(tasks.concat(task));
  }

  const deleteTaskHandler = async key => {
    await fetch(
      `https://myapps-25ff9-default-rtdb.europe-west1.firebasedatabase.app/toDoApp/${key}.json`,
      {
        method: 'DELETE',
      }
    );
    // setTasks(tasks.filter(task => task.key !== key));
    setFetching(!isFetching);
  };
  return (
    <React.Fragment>
      <NewTask addTaskHandler={addTaskHandler} />
      <Section>
        {isLoading ? (
          'Loading...'
        ) : (
          <Tasks items={tasks} deleteTaskHandler={deleteTaskHandler} />
        )}
      </Section>
    </React.Fragment>
  );
}

export default App;
