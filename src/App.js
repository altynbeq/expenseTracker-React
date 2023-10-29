import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Transactions } from './components/Transactions';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <Header />
          <Balance />
          <Transactions />
          <TransactionList />
          <AddTransaction />
        </header>
      </div>
    </GlobalProvider>
  );
}

export default App;
