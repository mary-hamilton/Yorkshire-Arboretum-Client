import { createContext } from 'react';

const AppContext = createContext({
  client: {},
  token: '',
  setToken: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setUser: () => {},
  logout: () => {},
});

export default AppContext;