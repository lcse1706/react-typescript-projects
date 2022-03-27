import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-left: 2rem;
  border-radius: 5px;
  background-color: #fff;

  & Button:active {
    background-color: #eee;
  }
`;

const Button = props => {
  return (
    <Btn type={props.type || 'submit'} onClick={props.onClick}>
      {props.label}
    </Btn>
  );
};

export default Button;
