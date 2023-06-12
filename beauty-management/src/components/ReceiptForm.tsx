import { useRef } from 'react';
import Input from './Input';
// import Input from './Input';

const ReceiptForm = () => {
  const clientNameRef = useRef<any>();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(clientNameRef.current.value);
  };

  return (
    //Add some validation

    <form onSubmit={submitHandler}>
      <Input ref={clientNameRef} label='Client Name' type='text' />
      <button type='submit'>Send</button>
    </form>
  );
};

export default ReceiptForm;
