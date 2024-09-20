import React, { useEffect, useState } from "react";

function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    setIsLoading((prev) => !prev);
  };

  useEffect(() => {
    toggleIsLoading();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        toggleIsLoading();
      });
  }, []);

  return { data, isLoading };
}

export default useFetch;
