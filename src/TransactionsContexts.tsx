import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export const TransactionsContexts = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // precisa sempre adicionar todo o endereco, e melhor usar uma biblioteca http
        // fetch("http://localhost:3000/api/transactions")
        api
          .get("transactions")
          // .then(reponse => reponse.json())
          .then((response) => setTransactions(response.data.transactions));
      }, []);

      return (
        <TransactionsContexts.Provider value={transactions}>
            {children}
        </TransactionsContexts.Provider>
      )
}