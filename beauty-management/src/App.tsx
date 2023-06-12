import React from 'react';
import ReceiptPage from './pages/ReceiptPage';

const login = 'true';

const App = () => {
  return <div>{login && <ReceiptPage />}</div>;
};

export default App;
