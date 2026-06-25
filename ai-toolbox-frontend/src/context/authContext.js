import { createContext, useEffect, useState } from "react";
import * as authService from "../services/authServices";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [loading, setLoading] = useState(true);

  // -------------------
  // LOGIN
  // -------------------
  const login = async (email, password) => {
    try {
      const data = await authService.login({
        email,
        password
      });

      localStorage.setItem("token", data.token);

      setToken(data.token);
      setUser(data.user);

      return {
        success: true
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login failed"
      };
    }
  };

  // -------------------
  // REGISTER
  // -------------------
  const register = async (
    name,
    email,
    password
  ) => {
    try {
      await authService.register({
        name,
        email,
        password
      });

      return {
        success: true
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Registration failed"
      };
    }
  };

  // -------------------
  // LOGOUT
  // -------------------
  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
    setToken(null);
  };

  // -------------------
  // RESTORE SESSION
  // -------------------
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const userData =
          await authService.getCurrentUser(
            token
          );

        setUser(userData);
      } catch (error) {
        logout();
      }

      setLoading(false);
    };

    loadUser();
  }, [token]);

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}