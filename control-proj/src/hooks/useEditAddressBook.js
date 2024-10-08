import React, { useState } from 'react'

export const useEditAddressBook = (setAddressBookList) => {
    const addressBookInitial = {
        firstName: "",
        lastName: "",
        phone: "",
      };
      const errorsInitial = {
        firstName: "",
        lastName: "",
        phone: "",
      };

    const [editAddressBook, setEditAddressBook] = useState(addressBookInitial);
    const [editErrors, setEditErrors] = useState(errorsInitial);

    const handleEditAddressBookSave = () => {
        if (
            editAddressBook.firstName.trim() == "" ||
            editAddressBook.lastName.trim() == "" ||
            editAddressBook.phone.trim() == ""
          ) {
            if (editAddressBook.firstName.trim() == "") {
                setEditErrors((prev) => {
                return { ...prev, firstName: "The first name is required" };
              });
            }
            if (editAddressBook.lastName.trim() == "") {
                setEditErrors((prev) => {
                return { ...prev, lastName: "The last name is required" };
              });
            }
            if (editAddressBook.phone.trim() == "") {
                setEditErrors((prev) => {
                return { ...prev, phone: "The phone is required" };
              });
            }
            return;
        }

        setAddressBookList(prev =>
            prev.map(el => {
              if (el.id === editAddressBook.id) {
                return editAddressBook;
              }
              return el;
            })
        );

        setEditErrors(errorsInitial);
        setEditAddressBook(addressBookInitial);
    }

    const onEditClick = (toDo) => {
        setEditAddressBook(toDo);
    }

    const handleEditAddressBookChange = (event) => {
        setEditAddressBook({
          ...editAddressBook,
          [event.target.name]: event.target.value,
        });
      };

    return {
        editAddressBook,
        editErrors,
        onEditClick,
        handleEditAddressBookChange,
        handleEditAddressBookSave
    }
}
