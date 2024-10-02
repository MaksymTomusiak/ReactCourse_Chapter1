import React, { useState } from 'react'

export const useEditToDo = (setToDoList) => {
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editError, setEditError] = useState('');

    const updateToDo = (id) => {
        if (editTitle === '') {
            setEditError('Title cannot be empty');
            return;
        }

        setToDoList(prev =>
            prev.map(el => {
              if (el.id === editId) {
                return { ...el, title: editTitle }; // Return the updated toDo
              }
              return el; // Return the unmodified toDo
            })
        );

        setEditError('');
        setEditId(null);
        setEditTitle('');
    }

    const onEditClick = (toDo) => {
        setEditId(toDo.id);
        setEditTitle(toDo.title);
    }

    const handleEditTitleChange = (event) => {
        setEditTitle(event.target.value);
      };

    return {
        editId,
        onEditClick,
        editError,
        editTitle,
        handleEditTitleChange,
        updateToDo,
    }
}
