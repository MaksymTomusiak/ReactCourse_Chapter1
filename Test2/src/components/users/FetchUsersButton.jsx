import React from 'react';

const FetchUsersButton = ({ onFetchButtonClick }) => {
  return <button onClick={() => onFetchButtonClick()}>Fetch Users</button>;
};

export default FetchUsersButton;
