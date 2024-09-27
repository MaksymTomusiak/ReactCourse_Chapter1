import React, { useEffect, useState } from "react";
import useGetLoading from "./useGetLoading";

function useGetToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const {isLoading, toggleIsLoading} = useGetLoading();

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

export default useGetToDoList;
