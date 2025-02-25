import "./App.css";
import CardBTC from "./components/CardBTC";
import CardDOGE from "./components/CardDOGE";
import CardETH from "./components/CardETH";
import CardSHIB from "./components/CardSHIB";
import CardSOL from "./components/CardSOL";
import CardUSD from "./components/CardUSD";

function App() {

  // API Binance: Busca preço de todos tokens (criptomoedas) disponíveis
  // function tokens() {
  //   axios
  //     .get("https://api.binance.com/api/v3/exchangeInfo")
  //     .then((response) => {
  //       const symbols = response.data.symbols.map((s) => s.symbol);
  //       console.log(symbols); // Lista de tokens disponíveis na Binance
  //     })
  //     .catch((error) => console.error(error));
  // }

  // useEffect(() => {
  //   tokens();
  // }, []);
  return (
    <div className="container_total">
      
      <CardBTC />
      <CardETH />
      <CardDOGE/>
      <CardUSD />
      <CardSOL/>
      <CardSHIB/>
      

      
    </div>
  );
}

export default App;
