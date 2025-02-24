
import './App.css';
import CardBTC from './components/CardBTC';
import CardETH from './components/CardETH';
import CardUSD from './components/CardUSD';

function App() {
  return (
    <div className="App">
      <CardBTC/>
      <CardETH/>
      <CardUSD/>
    </div>
  );
}

export default App;
