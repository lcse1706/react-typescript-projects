import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  list-style: decimal inside;

  & button {
    position: relative;
    padding: 5px 10px;
    margin: 0px 10px 10px 0px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    display: inline-block;
 
    color: #fff;
    text-decoration: none;
    transition: all 0.1s;
    -webkit-transition: all 0.1s;
    background-color: #e74c3c;
    border-bottom: 5px solid #bd3e31;
    text-shadow: 0px -2px #bd3e31;
  }
`;

const TaskForm = props => {
  const deleteTaskHandler = () => {
    props.deleteTaskHandler(props.item.key);
  };

  return (
    <ListItem>
      {props.item.text} <button onClick={deleteTaskHandler}>Delete</button>
    </ListItem>
  );
};

export default TaskForm;
