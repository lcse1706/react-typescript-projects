import React from 'react';
import styled, { css } from 'styled-components';

const Message = styled.p`
  width: 100%;
  height: 1rem;
  color: red;
  transition: 0.2s ease;
  @keyframes showError {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(1);
    }
    75% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  ${props =>
    props.errorInput &&
    css`
      animation: showError 2s;
    `};
`;

const ErrorMessage = props => {
  return <Message errorInput={props.message}>{props.message}</Message>;
};

export default ErrorMessage;
