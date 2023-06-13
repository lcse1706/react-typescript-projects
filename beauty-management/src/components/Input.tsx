import React from 'react';

interface inputProps {
  label: string;
  type: string;
}

// dlaczego jak wpisuje HTMLInputElement to err
const Input = React.forwardRef((props: inputProps, ref: any) => {
  return (
    <div>
      <label>{props.label}</label>
      <input ref={ref} type={props.type}></input>
    </div>
  );
});

export default Input;
