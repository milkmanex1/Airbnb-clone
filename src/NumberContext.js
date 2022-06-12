import { createContext, useState } from "react";

const NumberContext = createContext();

export function NumberProvider({ children }) {
  const [number, setNumber] = useState(0);

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
}

export default NumberContext;
