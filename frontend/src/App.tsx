import React, { useEffect, useState } from 'react';

import api from './services/api';

import User from './Components/Users';

/* Define o tipo o qual será a variável */
interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    /* Define o tipo de retorno de dados */
    api.get<IUser[]>('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h3>Usuários</h3>
      {users.map((user: IUser) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
