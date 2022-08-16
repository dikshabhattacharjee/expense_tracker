
import './App.css';
import Header from './Components/Header.js'
import Balance from './Components/Balance.js'
import IncomeExpenses from './Components/IncomeExpenses.js'
import TransactionList from './Components/TransactionList'
import AddTransactions from './Components/AddTransactions';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactions/>
       </div>
    </GlobalProvider>
  );
}

export default App;
