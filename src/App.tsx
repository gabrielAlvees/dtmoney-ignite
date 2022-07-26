import { createServer } from "miragejs";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';

createServer({
  routes() {
    this.namespace = "api";

    // Quando tiver uma requisão do tipo get:
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposite",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

export function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
      setModalIsOpen(true);
  }

  function handleCloseModal() {
      setModalIsOpen(false);
  }

  return (
    <>
      <Header openModal={handleOpenModal}/>
      <Dashboard />
      <GlobalStyle />
      
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={handleCloseModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}
