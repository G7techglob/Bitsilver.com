async function loadPrices(){

    const btc = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    );

    const btcData = await btc.json();

    document.getElementById("btc-price").innerText =
        "$" + Number(btcData.price).toLocaleString();

    const eth = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
    );

    const ethData = await eth.json();

    document.getElementById("eth-price").innerText =
        "$" + Number(ethData.price).toLocaleString();
}

loadPrices();

setInterval(loadPrices,5000);
