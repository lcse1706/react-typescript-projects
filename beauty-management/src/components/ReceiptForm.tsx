import { useRef, useState } from 'react';
import Input from './Input';

const ReceiptForm = () => {
  const [treatment, setTreatment] = useState('');

  // dlaczego jak wpisuje HTMLInputElement to err
  const clientNameRef = useRef<any>();
  const clientEmailRef = useRef<any>();
  const treatmentRef = useRef<any>();
  const priceRef = useRef<any>();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    //think how yo use useEffect to data object
    const data = {
      name: clientNameRef.current.value,
      email: clientEmailRef.current.value,
      treatment: treatmentRef.current.value,
      price: priceRef.current.value,
    };
    console.log(data);

    clientNameRef.current.value = '';
    clientEmailRef.current.value = '';
    treatmentRef.current.value = '';
    priceRef.current.value = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTreatment(e.target.value);
  };

  return (
    //Add some validation

    <form onSubmit={submitHandler}>
      <Input ref={clientNameRef} label='Client Name' type='text' />
      <Input ref={clientEmailRef} label='Client Email' type='email' />
      <label>
        Treatment:
        <select ref={treatmentRef} value={treatment} onChange={handleChange}>
          <option value='lashes'>Lashes</option>
          <option value='brown'>Brown</option>
          <option value='nails'>Nails</option>
        </select>
      </label>
      <Input ref={priceRef} label='Price' type='number' />
      <button type='submit'>Send</button>
    </form>
  );
};

export default ReceiptForm;
