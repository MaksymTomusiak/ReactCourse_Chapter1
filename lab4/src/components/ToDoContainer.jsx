import React, { useEffect } from "react";
import { useState } from "react";
import AddToDoForm from "./AddToDoForm";
import SearchInput from "./SearchInput";
import ToDoTable from "./ToDoTable";
import useGetToDoList from "../hooks/useGetToDoList";

const ToDoContainer = () => {
  const toDoInitial = {
    title: "",
    id: null,
  };

  const [newToDo, setNewToDo] = useState(toDoInitial);
  const [filterQuery, setFilterQuery] = useState("");

  const { toDoList, setToDoList, isLoading } = useGetToDoList();

  const handleNewTitleChange = (event) => {
    setNewToDo({ ...newToDo, title: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newToDo.title === "") {
      return;
    }

    const updatedToDoList = [...toDoList, { ...newToDo, id: new Date() }];

    setToDoList(updatedToDoList);
    setNewToDo(toDoInitial);
  };

  const handleFilterQueryChange = (event) => {
    setFilterQuery(event.target.value);
  };

  const handleDeleteClick = (id) => {
    const updatedList = toDoList.filter((x) => x.id !== id);

    setToDoList(updatedList);
  };

  const filteredToDo = toDoList.filter((x) =>
    x.title.toLowerCase().includes(filterQuery.toLowerCase())
  );
  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <h2 style={{ margin: "0px" }}>Loading</h2>
          <svg
            style={{ maxWidth: "30px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <radialGradient
              id="a12"
              cx=".66"
              fx=".66"
              cy=".3125"
              fy=".3125"
              gradientTransform="scale(1.5)"
            >
              <stop offset="0" stopColor="#020045"></stop>
              <stop offset=".3" stopColor="#020045" stopOpacity=".9"></stop>
              <stop offset=".6" stopColor="#020045" stopOpacity=".6"></stop>
              <stop offset=".8" stopColor="#020045" stopOpacity=".3"></stop>
              <stop offset="1" stopColor="#020045" stopOpacity="0"></stop>
            </radialGradient>
            <circle
              transform-origin="center"
              fill="none"
              stroke="url(#a12)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="200 1000"
              strokeDashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="spline"
                dur="2"
                values="360;0"
                keyTimes="0;1"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <circle
              transform-origin="center"
              fill="none"
              opacity=".2"
              stroke="#020045"
              strokeWidth="15"
              strokeLinecap="round"
              cx="100"
              cy="100"
              r="70"
            ></circle>
          </svg>
        </div>
      )}
      <>
        <SearchInput
          query={filterQuery}
          onQueryChange={handleFilterQueryChange}
        />
        <AddToDoForm
          title={newToDo?.title}
          onTitleChange={handleNewTitleChange}
          onSubmit={handleSubmit}
        />
        <ToDoTable toDoList={filteredToDo} onDeleteClick={handleDeleteClick} />
      </>
    </>
  );
};

export default ToDoContainer;
