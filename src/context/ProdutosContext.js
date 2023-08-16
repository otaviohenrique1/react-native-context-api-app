import { createContext, useState } from "react";

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
  const [nome, setNome] = useState("");

  return (
    <ProdutosContext.Provider
      value={{ nome, setNome }}
    >{children}</ProdutosContext.Provider>
  );
}
