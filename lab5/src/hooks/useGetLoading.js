import React, {useState} from 'react'

function useGetLoading() {
    const [isLoading, setIsLoading] = useState(false);

    const toggleIsLoading = () => {
      setIsLoading((prev) => !prev);
    };
  
    return {isLoading, toggleIsLoading};
}

export default useGetLoading;