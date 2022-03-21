import styled from 'styled-components';

const Wrapp = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

const Wrapper = props => {
  return <Wrapp>{props.children}</Wrapp>;
};

export default Wrapper;
