import axios from 'axios';
function useDeleteUser() {
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete('https://dummyjson.com/users/' + id);
      return response;
    } catch (error) {
      console.error('Error deleting users:', error);
      console.log(error);
    }
  };
  return { deleteUser };
}

export default useDeleteUser;
