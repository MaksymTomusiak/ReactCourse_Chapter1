import { useState } from 'react';
import './App.css';
import UsersContainer from './components/users/UsersContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UsersContainer />
    </>
  );
}

export default App;
