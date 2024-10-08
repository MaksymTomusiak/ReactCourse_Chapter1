import React, { useState } from "react";

const AddAddressBookForm = ({
  newAddressBook,
  onBookPropChange,
  onSubmit,
  errors,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={newAddressBook.firstName}
        name="firstName"
        onChange={onBookPropChange}
      />
      {errors.firstName !== "" && (
        <p style={{ color: "darkred" }}>{errors.firstName}</p>
      )}

      <input
        value={newAddressBook.lastName}
        name="lastName"
        onChange={onBookPropChange}
      />
      {errors.lastName !== "" && (
        <p style={{ color: "darkred" }}>{errors.lastName}</p>
      )}

      <input
        value={newAddressBook.phone}
        name="phone"
        onChange={onBookPropChange}
      />
      {errors.phone !== "" && (
        <p style={{ color: "darkred" }}>{errors.phone}</p>
      )}

      <button style={{ margin: "0px 10px" }} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddAddressBookForm;
