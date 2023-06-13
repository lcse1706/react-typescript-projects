import React from 'react';
import ReceiptPage from './pages/ReceiptPage';
import './App.css';

const login = 'true';

const App = () => {
  return <div>{login && <ReceiptPage />}</div>;
};

export default App;
