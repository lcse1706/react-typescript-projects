import React from 'react';
import styled, { css } from 'styled-components';

const Message = styled.p`
  width: 100%;
  transform: scale(0);
  /* margin-top: 1rem; */
  color: red;
  transition: transform 0.2s ease-out;
  ${props =>
    props.errorInput &&
    css`
      transform: scale(1);
    `};
`;

const ErrorMessage = props => {
  return <Message errorInput={props.errorInput}>{props.message}</Message>;
};

export default ErrorMessage;
