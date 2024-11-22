const UsersTable = ({ usersList, onDeleteClick }) => {
  if (usersList.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {usersList.map((user) => (
          <tr key={user.id.toString()}>
            <td>{user.id.toString()}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => onDeleteClick(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
