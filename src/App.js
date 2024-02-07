import { useEffect, useState } from "react";

function App() {
  const dollor = 1
  const krd = dollor * 1332.21
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers/")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins! {loading ? "" :`(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select> 
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : {(coin.quotes.USD.price * krd).toLocaleString('ko-KR',{ maximumFractionDigits: 8 })} KRD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
