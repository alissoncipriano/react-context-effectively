// Using useReducer just for studying purposes
import React, { createContext, useContext, useReducer } from 'react';

export const CountContext = createContext();

// Object containing all my states initial state
const initialState = { count: 0 }

// Function to manage my states
function countReducer(state, action) {
  switch(action) {
    case 'decrement':
      return { count: state.count - 1 };
    case 'increment':
      return { count: state.count + 1 }
    default: throw new Error(`Unhandled action type: ${action}`)
  }
}

// Provider
export function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const value = {state, dispatch};

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

// Custom hook to use the provider
export function useCount() {
  const context = useContext(CountContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context
}