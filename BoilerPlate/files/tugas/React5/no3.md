import React, { createContext, useReducer } from 'react';

export const CounterContext = createContext();

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

<!-- counter -->
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;

<!-- app -->
import React from 'react';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';

const App = () => {
  return (
    <CounterProvider>
      <div style={{ padding: '20px' }}>
        <h1>Counter with Context and useReducer</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;