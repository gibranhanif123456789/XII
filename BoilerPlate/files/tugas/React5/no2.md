import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

<!-- user Info -->
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserInfo = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'John Doe', email: 'john@example.com' })}>
          Login
        </button>
      )}
    </div>
  );
};

export default UserInfo;

<!-- app -->
import React from 'react';
import { UserProvider } from './UserContext';
import UserInfo from './UserInfo';

const App = () => {
  return (
    <UserProvider>
      <div style={{ padding: '20px' }}>
        <h1>State Global Pengguna</h1>
        <UserInfo />
      </div>
    </UserProvider>
  );
};

export default App;