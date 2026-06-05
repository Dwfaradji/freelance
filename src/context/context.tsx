'use client';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

import { reducer, initialState } from './reducer';

// Création du Context
const Context = createContext<any>(null);

interface ProviderProps {
  children: ReactNode;
}

// Provider du Context
export const MyProvider = ({
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
