import { createContext } from 'react';

export const LembiContext = createContext({
  count: 0,
  increaseCount: () => {},
  decreaseCount: () => {},
});

const LembiContextProvider = ({ children, value }) => {
  return (
    <LembiContext.Provider value={value}>{children}</LembiContext.Provider>
  );
};
export default LembiContextProvider;
