/* eslint-disable @typescript-eslint/no-unused-vars */
// src/contexts/AuthContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import { IUser } from "@/responseType/response.type";

// Define the shape of the AuthContext
interface AuthContextType {
  isAuth: boolean;
  user: IUser | null;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  user: null,
});

// AuthProvider component
export const AuthProvider: React.FC<{
  children: React.ReactNode;
  initialToken?: string | null;
}> = ({ children, initialToken }) => {
  // Decode the token and set auth state
  const decodedUser = initialToken ? (jwt.decode(initialToken) as IUser) : null;
  const isAuth = !!decodedUser;

  // Context value
  const contextValue = {
    isAuth,
    user: decodedUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
