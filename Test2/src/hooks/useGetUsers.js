import { useState } from 'react';
import useGetLoading from './useGetLoading';
import axios from 'axios';

function useGetUsers() {
  const [usersList, setUsersList] = useState([]);
  const { isLoading, toggleIsLoading } = useGetLoading();

  const fetchAllUsers = async () => {
    toggleIsLoading();
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setUsersList(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      toggleIsLoading();
    }
  };

  return { usersList, setUsersList, isLoading, fetchAllUsers };
}

export default useGetUsers;
