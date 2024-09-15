import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import ToDoTable from './components/ToDoTable';
import AddToDoComponent from './components/AddToDoComponent';
import SearchInput from './components/SearchInput';

function App() {
  const toDoInitial = {
    title: '',
    id: null,
  };

  const [toDoList, setToDoList] = useState([]);

  const [newToDo, setNewToDo] = useState(toDoInitial);

  const [filterQuery, setFilterQuery] = useState('');

  const handleNewTitleChange = (event) => {
    setNewToDo({ ...newToDo, title: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedToDoList = [...toDoList, { ...newToDo, id: v4() }];

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
      <AddToDoComponent
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDoList={filteredToDo} onDeleteClick={handleDeleteClick} />
    </>
  );
}

export default App;
