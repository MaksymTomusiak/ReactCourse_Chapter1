import React from "react";
import { useEditAddressBook } from "../hooks/useEditAddressBook";

function AddressBookTable({ addressBookList, setAddressBookList }) {
  const {
    editAddressBook,
    editErrors,
    onEditClick,
    handleEditAddressBookChange,
    handleEditAddressBookSave,
  } = useEditAddressBook(setAddressBookList);

  if (addressBookList.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addressBookList.map((addressBook) => {
          <tr></tr>;
          return addressBook.id === editAddressBook.id ? (
            <tr key={addressBook.id.toString()}>
              <td>{addressBook.id.toString()}</td>
              <td>
                <input
                  style={{
                    borderRadius: "5px",
                  }}
                  name="firstName"
                  value={editAddressBook.firstName}
                  onChange={handleEditAddressBookChange}
                />
                {editErrors.firstName === "" ? null : (
                  <p style={{ color: "darkred", margin: "0" }}>
                    {editErrors.firstName}
                  </p>
                )}
              </td>
              <td>
                <input
                  style={{
                    borderRadius: "5px",
                  }}
                  name="lastName"
                  value={editAddressBook.lastName}
                  onChange={handleEditAddressBookChange}
                />
                {editErrors.lastName === "" ? null : (
                  <p style={{ color: "darkred", margin: "0" }}>
                    {editErrors.lastName}
                  </p>
                )}
              </td>
              <td>
                <input
                  style={{
                    borderRadius: "5px",
                  }}
                  name="phone"
                  value={editAddressBook.phone}
                  onChange={handleEditAddressBookChange}
                />
                {editErrors.phone === "" ? null : (
                  <p style={{ color: "darkred", margin: "0" }}>
                    {editErrors.phone}
                  </p>
                )}
              </td>
              <td>
                <button onClick={handleEditAddressBookSave}>Save</button>
              </td>
            </tr>
          ) : (
            <tr key={addressBook.id.toString()}>
              <td>{addressBook.id.toString()}</td>
              <td>{addressBook.firstName}</td>
              <td>{addressBook.lastName}</td>
              <td>{addressBook.phone}</td>
              <td>
                <button onClick={() => onEditClick(addressBook)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AddressBookTable;
