import React from "react";
import DeleteToDoButton from "./DeleteToDoButton";
import { useEditToDo } from "../hooks/useEditToDo";

function ToDoTable({ toDoList, setToDoList, onDeleteClick }) {
  const {
    editId,
    onEditClick,
    editError,
    editTitle,
    handleEditTitleChange,
    updateToDo: onSaveClick,
  } = useEditToDo(setToDoList);

  if (toDoList.length === 0) {
    return <p>No data to display</p>;
  }

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
          <tr></tr>;
          return toDo.id === editId ? (
            <tr key={toDo.id.toString()}>
              <td>{toDo.id.toString()}</td>
              <td>
                <input
                  style={{
                    borderRadius: "5px",
                  }}
                  value={editTitle}
                  onChange={handleEditTitleChange}
                />
                {editError === "" ? null : (
                  <p style={{ color: "darkred", margin: "0" }}>{editError}</p>
                )}
              </td>

              <td>
                <DeleteToDoButton
                  onButtonClick={() => onDeleteClick(toDo.id)}
                />
                <button onClick={onSaveClick}>Save</button>
              </td>
            </tr>
          ) : (
            <tr key={toDo.id.toString()}>
              <td>{toDo.id.toString()}</td>
              <td>{toDo.title}</td>
              <td>
                <DeleteToDoButton
                  onButtonClick={() => onDeleteClick(toDo.id)}
                />
                <button onClick={() => onEditClick(toDo)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ToDoTable;
