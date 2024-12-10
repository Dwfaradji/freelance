'use client';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Création du Context
const Context = createContext<any>(null);

interface ProviderProps {
  reducer: (state: any, action: any) => any;
  initialState: any;
  children: ReactNode;
}

// Provider du Context
export const MyProvider = ({
  reducer,
  initialState,
  children,
}: ProviderProps) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

// Hook pour utiliser le Context
export const useMyContext = () => {
  return useContext(Context);
};
