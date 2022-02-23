import logo from './logo.svg';
import './App.css';
import Customers from './Components/customers/customers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Retailer Rewards
        </h2>
      </header>
      <Customers />
    </div>
  );
}

export default App;
