import { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
   const [user, setUser] = useState(() => localStorage.getItem('userEmail') || '');


  const signin = (newToken, userEmail) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('userEmail', userEmail);
    setToken(newToken);
    setIsAuthenticated(true);
    setUser(userEmail);
  };

  // const logout = () => {
  //   localStorage.removeItem('token');
  //   setToken(null);
  //   setIsAuthenticated(false);
  //   navigate('/signin'); 
  // };

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated, setIsAuthenticated, signin, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
