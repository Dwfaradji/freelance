'use client';
import React, { createContext, useContext, useReducer } from 'react';

// Création du Context
const Context = createContext();

// Provider du Context
export const MyProvider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

// Hook pour utiliser le Context
export const useMyContext = () => {
  console.log(useContext(Context));
  return useContext(Context);
};
