import React from 'react';
import Header from './component/Header';
import Balance from './component/Balance';
import Income from './component/IncomeExpenses';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
