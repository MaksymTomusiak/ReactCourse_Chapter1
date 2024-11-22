import React from 'react';

const FetchUsersButton = ({ onFetchButtonClick }) => {
  return (
    <button style={{ margin: '20px' }} onClick={() => onFetchButtonClick()}>
      Fetch Users
    </button>
  );
};

export default FetchUsersButton;
