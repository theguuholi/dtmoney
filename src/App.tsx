import { Dashboard } from "./components/Dashboard";
import { useState } from "react";

import Modal from "react-modal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {
  TransactionsProvider,
} from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      {/* <> */}
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </TransactionsProvider>
      {/* </> */}
    </div>
  );
}
