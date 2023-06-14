import { useRef, useState, useEffect } from 'react';
import sendReceipt from './sendReceipt';
import Input from './Input';
import './ReceiptForm.css';

const ReceiptForm = () => {
  const [treatment, setTreatment] = useState('');
  const [receiptsArray, setReceiptsArray] = useState(Array<object>);

  useEffect(() => {
    // rerender receipt list
    console.dir(receiptsArray);
  }, [receiptsArray]);

  // dlaczego jak wpisuje HTMLInputElement to err
  const clientNameRef = useRef<any>();
  const clientEmailRef = useRef<any>();
  const treatmentRef = useRef<any>();
  const priceRef = useRef<any>();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: clientNameRef.current.value,
      email: clientEmailRef.current.value,
      treatment: treatmentRef.current.value,
      price: priceRef.current.value,
    };

    // 1.Save array to display and edit if needed, 2.load from the server
    setReceiptsArray(current => [...current, data]);

    // Send data to make a form and send it to client
    sendReceipt(data);

    clientNameRef.current.value = '';
    clientEmailRef.current.value = '';
    setTreatment('');
    priceRef.current.value = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTreatment(e.target.value);
  };

  return (
    //Add some validation

    <form onSubmit={submitHandler}>
      <Input ref={clientNameRef} label='Client Name:' type='text' />
      <Input ref={clientEmailRef} label='Client Email:' type='email' />
      <label className='label'>
        Treatment:
        <select ref={treatmentRef} value={treatment} onChange={handleChange}>
          <option value='' disabled hidden>
            Choose here
          </option>
          <option value='lashes'>Lashes</option>
          <option value='brown'>Brown</option>
          <option value='nails'>Nails</option>
        </select>
      </label>
      <Input ref={priceRef} label='Price:' type='number' />
      <button type='submit'>Send</button>
    </form>
  );
};

export default ReceiptForm;
