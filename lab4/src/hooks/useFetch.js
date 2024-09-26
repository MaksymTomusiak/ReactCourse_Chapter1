import React, { useEffect, useState } from "react";

function useFetch() {
  const [toDoList, setToDoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    setIsLoading((prev) => !prev);
  };

  useEffect(() => {
    toggleIsLoading();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setToDoList(json);
        toggleIsLoading();
      });
  }, []);

  return { toDoList, setToDoList, isLoading };
}

export default useFetch;
