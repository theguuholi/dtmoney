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

// interface TransactionInput{
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// } ou poderia usar o pick

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}
// export const TransactionsContexts = createContext<Transaction[]>([]);
export const TransactionsContexts = createContext<TransactionContextData>(
    {} as TransactionContextData
    );

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

      function createTransaction(transaction : TransactionInput){        
        api.post("transactions", transaction)
      }

      return (
        <TransactionsContexts.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContexts.Provider>
      )
}