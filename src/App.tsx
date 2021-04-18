import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
    console.log("modal is open");
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />

      <TransactionsTable />
    </>
  );
}

export default App;
