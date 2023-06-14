import Navigation from './Navigation';

const MainHeader = (props: { isAuthenticated: boolean; onLogout: any }) => {
  return (
    <header>
      <h1>Beauty Management</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
