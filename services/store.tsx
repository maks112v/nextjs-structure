import React, {
  Context,
  createContext,
  FunctionComponent,
  useContext,
} from 'react';

interface StoreWrapperType {}

const StoreContext: Context<Partial<StoreWrapperType>> = createContext({});

export const useStore = (): Partial<StoreWrapperType> =>
  useContext(StoreContext);

const StoreWrapper: FunctionComponent = ({ children }) => {
  const value = {};
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreWrapper;
