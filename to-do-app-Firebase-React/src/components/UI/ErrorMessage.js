import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  width: 100%;
  margin-top: 1rem;
  transition: 1s;
`;

const ErrorMessage = props => {
  return <Message>{props.message}</Message>;
};

export default ErrorMessage;
