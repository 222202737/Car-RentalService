import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and set user
      // You'll need to implement a verify token endpoint in your backend
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const response = await auth.login(credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    // Set user data
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const register = async (userData) => {
    const response = await auth.register(userData);
    const { token } = response.data;
    localStorage.setItem('token', token);
    // Set user data
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);