const API = "http://localhost:5000";

async function loadBTC() {

    const response = await fetch(
        `${API}/api/crypto/BTCUSDT`
    );

    const data = await response.json();

    document.getElementById(
        "btc-price"
    ).innerText = "$" + data.price;
}

async function loadPortfolio() {

    const response = await fetch(
        `${API}/api/portfolio`
    );

    const data = await response.json();

    document.getElementById(
        "portfolio"
    ).innerText =
        JSON.stringify(data, null, 2);
}

async function buy() {

    const symbol =
        document.getElementById("symbol").value;

    const quantity =
        document.getElementById("quantity").value;

    const price =
        document.getElementById("price").value;

    await fetch(`${API}/api/buy`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            symbol,
            quantity,
            price
        })
    });

    loadPortfolio();
}

loadBTC();
loadPortfolio();

setInterval(loadBTC, 5000);
