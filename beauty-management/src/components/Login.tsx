import { useRef } from 'react';
import Input from './Input';

const Login = (props: { loginHandler: any }) => {
  const loginRef = useRef();
  const passRef = useRef();

  const loginHandler = () => {
    props.loginHandler(true);
  };

  return (
    <form>
      <Input ref={loginRef} label='Login' type='text' />
      <Input ref={passRef} label='Password' type='password' />
      <button type='submit' onClick={loginHandler}>
        Login
      </button>
    </form>
  );
};

export default Login;
