import React, { useState, useEffect } from 'react';
import './App.css';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import Section from './components/UI/Section';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSending, setSending] = useState(false);

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
      <Section>
        {isLoading ? (
          <p style={{ textAlign: 'center' }}>Loading...</p>
        ) : (
          <Tasks items={tasks} deleteTaskHandler={deleteTaskHandler} />
        )}
      </Section>
    </React.Fragment>
  );
}

export default App;
