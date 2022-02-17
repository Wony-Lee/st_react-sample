import React, { useState } from 'react'
import AddUser from './copponents/Users/AddUser';
import UsersList from './copponents/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])
  const handleAddUser = (name, age) => {
    setUsersList(prev => {
      return [...prev, { name: name, age: age, id: usersList.length + 1 }]
    })
  }
  return (
    <>
      <AddUser handleAddUser={handleAddUser} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
