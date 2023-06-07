import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListItem } from './components/ListItem';
import type { User } from './types/user';

function App() {

  const [users, setUsers] = useState<User[]>([])

  const usersJson: Array<User> = [
    {
      id: 1,
      name: "hoge",
      age: 20,
      personalColor: "blue",
    },
    {
      id: 2,
      name: "fuga",
      age: 22,
      personalColor: "pink",
    },
    {
      id: 3,
      name: "piyo",
      age: 24,
      personalColor: "green",
    },
  ]

  useEffect(() => {
    setUsers(usersJson)
  }, [])

  console.log(users)

  return (
    <div className="App">
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor}></ListItem>
      ))}
    </div>
  );
}

export default App;
