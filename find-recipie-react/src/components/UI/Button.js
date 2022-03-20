import React from 'react';
import styled from 'styled-components';

const Btn = styled.button``;

const Button = props => {
  return <Btn type={props.type || 'submit'}>{props.label}</Btn>;
};

export default Button;
