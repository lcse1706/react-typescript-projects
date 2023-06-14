import React from 'react';

const Navigation = (props: { isLoggedIn: boolean; onLogout: any }) => {
  return (
    <nav>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href='/'>Receipts</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href='/'>Send Receipt</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
