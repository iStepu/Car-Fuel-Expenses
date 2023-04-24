import React from 'react';
import { Header }from './components/Header';
import { TransactionList }from './components/TransactionList';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <TransactionList />
    </div>
  );
}

export default App;
