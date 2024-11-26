import { useState } from 'react';
import SearchInput from '../common/SearchInput';
import useGetUsers from '../../hooks/useGetUsers';
import useDeleteUser from '../../hooks/useDeleteUsers';
import { Loading } from '../common/Loading';
import UsersTable from './UsersTable';
import FetchUsersButton from './FetchUsersButton';

const UsersContainer = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const { usersList, setUsersList, isLoading, fetchAllUsers } = useGetUsers();
  const { deleteUser } = useDeleteUser();

  const handleDeleteClick = async (id) => {
    await deleteUser(id);
    const newUsersList = usersList.filter((user) => user.id !== id);
    setUsersList(newUsersList);
  };

  const handleUsersFetch = () => {
    fetchAllUsers();
  };

  const handleFilterQueryChange = (event) => {
    setFilterQuery(event.target.value);
  };

  const filteredUsers = usersList.filter((x) =>
    Object.keys(x).some((key) => {
      if (key === 'id') {
        return;
      }
      return String(x[key]).toLowerCase().includes(filterQuery.toLowerCase());
    })
  );

  return (
    <>
      {isLoading && <Loading isLoading={isLoading}>Loading...</Loading>}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FetchUsersButton onFetchButtonClick={handleUsersFetch} />

        <SearchInput
          query={filterQuery}
          onQueryChange={handleFilterQueryChange}
        />
      </div>

      <UsersTable
        usersList={filteredUsers}
        setUsersList={setUsersList}
        onDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default UsersContainer;
