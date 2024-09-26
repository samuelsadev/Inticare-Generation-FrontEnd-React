import React, { createContext, useContext, useState, ReactNode } from 'react';
import Produto from '../models/Produto';

interface CarrinhoContextType {
  itensDoCarrinho: Produto[];
  adicionarAoCarrinho: (item: Produto) => void;
  removerDoCarrinho: (id: number) => void;
  setItensDoCarrinho: React.Dispatch<React.SetStateAction<Produto[]>>; // Adicionado
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [itensDoCarrinho, setItensDoCarrinho] = useState<Produto[]>([]);

  const adicionarAoCarrinho = (item: Produto) => {
    setItensDoCarrinho(prevItens => {
      const itemExistente = prevItens.find(i => i.id === item.id);
      if (itemExistente) {
        return prevItens.map(i =>
          i.id === item.id
            ? { ...i, quantidade: i.quantidade + item.quantidade }
            : i
        );
      } else {
        return [...prevItens, item];
      }
    });
  };

  const removerDoCarrinho = (id: number) => {
    setItensDoCarrinho(prevItens => prevItens.filter(item => item.id !== id));
  };

  return (
    <CarrinhoContext.Provider value={{ itensDoCarrinho, adicionarAoCarrinho, removerDoCarrinho, setItensDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (context === undefined) {
    throw new Error('useCarrinho must be used within a CarrinhoProvider');
  }
  return context;
};