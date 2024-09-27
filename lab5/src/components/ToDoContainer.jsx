import React, { useEffect } from 'react';
import { useState } from 'react';
import AddToDoForm from './AddToDoForm';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import useGetToDoList from '../hooks/useGetToDoList';
import { Loading } from './Loading';

const ToDoContainer = () => {
  const toDoInitial = {
    title: '',
    id: null,
  };

  const [newToDo, setNewToDo] = useState(toDoInitial);

  const [filterQuery, setFilterQuery] = useState('');

  const { toDoList, setToDoList, isLoading } = useGetToDoList();

  const handleNewTitleChange = (event) => {
    setNewToDo({ ...newToDo, title: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newToDo.title === '') {
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
      <SearchInput
        query={filterQuery}
        onQueryChange={handleFilterQueryChange}
      />
      <AddToDoForm
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <Loading isLoading={isLoading}>
        <ToDoTable toDoList={filteredToDo} onDeleteClick={handleDeleteClick} />
      </Loading>
    </>
  );
};

export default ToDoContainer;
