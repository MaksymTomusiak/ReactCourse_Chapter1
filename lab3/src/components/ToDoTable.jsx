import React from 'react';
import DeleteToDoButton from './DeleteToDoButton';

function ToDoTable({ toDoList, onDeleteClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDoList.map((toDo) => {
          return (
            <tr key={toDo.id.toString()}>
              <td>{toDo.id.toString()}</td>
              <td>{toDo.title}</td>
              <td>
                <DeleteToDoButton
                  onButtonClick={() => onDeleteClick(toDo.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ToDoTable;
