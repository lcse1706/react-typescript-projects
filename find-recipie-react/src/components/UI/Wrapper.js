import styled from 'styled-components';

const Wrapp = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
`;

const Wrapper = props => {
  return <Wrapp>{props.children}</Wrapp>;
};

export default Wrapper;
