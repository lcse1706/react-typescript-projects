import Wrapper from './components/UI/Wrapper';
import SearchBar from './components/Search/SearchBar';
import ResetStyle from './components/styled/Reset';

function App() {
  return (
    <Wrapper>
      <ResetStyle />
      <SearchBar />
    </Wrapper>
  );
}

export default App;
