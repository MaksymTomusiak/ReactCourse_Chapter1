import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loading = ({ isLoading, children }) => {
  return (
    <>
      <div style={{ position: 'absolute', left: '45%' }}>
        <ClipLoader
          position="relative"
          color={'#aaa'}
          loading={isLoading}
          //cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div>{children}</div>
    </>
  );
};
