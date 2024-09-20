import React from 'react';

const AddToDoForm = ({ title, onTitleChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={title} onChange={onTitleChange} />
      <button style={{ margin: '0px 10px' }} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddToDoForm;
