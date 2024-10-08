import { useState } from "react";
import SearchInput from "./SearchInput";
import AddressBookTable from "./AddressBookTable";
import AddAddressBookForm from "./AddAddressBookForm";

const AddressBookContainer = () => {
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

  const [newAddressBook, setNewAddressBook] = useState(addressBookInitial);

  const [filterQuery, setFilterQuery] = useState("");

  const [addressBookList, setAddressBookList] = useState([]);

  const [errors, setErrors] = useState(errorsInitial);

  const handleAddressBookChange = (event) => {
    setNewAddressBook({
      ...newAddressBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      newAddressBook.firstName.trim() == "" ||
      newAddressBook.lastName.trim() == "" ||
      newAddressBook.phone.trim() == ""
    ) {
      if (newAddressBook.firstName.trim() == "") {
        setErrors((prev) => {
          return { ...prev, firstName: "The first name is required" };
        });
      }
      if (newAddressBook.lastName.trim() == "") {
        setErrors((prev) => {
          return { ...prev, lastName: "The last name is required" };
        });
      }
      if (newAddressBook.phone.trim() == "") {
        setErrors((prev) => {
          return { ...prev, phone: "The phone name is required" };
        });
      }
      return;
    }

    setErrors(errorsInitial);

    const updatedAddressBookList = [
      ...addressBookList,
      { ...newAddressBook, id: new Date() },
    ];

    setAddressBookList(updatedAddressBookList);
    setNewAddressBook(addressBookInitial);
  };

  const handleFilterQueryChange = (event) => {
    setFilterQuery(event.target.value);
  };

  const filteredAddressBooks = addressBookList.filter((x) =>
    Object.keys(x).some((key) => {
      if (key === "id") {
        return;
      }
      return String(x[key]).toLowerCase().includes(filterQuery.toLowerCase());
    })
  );

  return (
    <>
      <SearchInput
        query={filterQuery}
        onQueryChange={handleFilterQueryChange}
      />

      <AddAddressBookForm
        newAddressBook={newAddressBook}
        onBookPropChange={handleAddressBookChange}
        onSubmit={handleSubmit}
        errors={errors}
      />

      <AddressBookTable
        addressBookList={filteredAddressBooks}
        setAddressBookList={setAddressBookList}
      />
    </>
  );
};

export default AddressBookContainer;
